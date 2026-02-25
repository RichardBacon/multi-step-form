import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import {
  advancePastStep1,
  advancePastStep2Yearly,
  fillPersonalInfo,
  renderForm,
} from '../../../test-utils/renderForm';

describe('MultiStepForm', () => {
  describe('Flow 1: validation on step 1', () => {
    it('shows required errors for all fields when advancing with empty inputs', async () => {
      const user = userEvent.setup();
      renderForm();

      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(screen.getAllByText('This field is required')).toHaveLength(3);
    });

    it('does not show errors before the user attempts to advance', () => {
      renderForm();

      expect(
        screen.queryByText('This field is required'),
      ).not.toBeInTheDocument();
    });

    it('shows an email format error when the email is malformed', async () => {
      const user = userEvent.setup();
      renderForm();

      await fillPersonalInfo(user, { email: 'not-an-email' });
      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(
        screen.getByText('Please enter a valid email address'),
      ).toBeInTheDocument();
    });

    it('shows a phone format error when the phone number is too short', async () => {
      const user = userEvent.setup();
      renderForm();

      await fillPersonalInfo(user, { phone: '123' });
      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(
        screen.getByText('Please enter a valid phone number'),
      ).toBeInTheDocument();
    });

    it('advances to step 2 when all personal info is valid', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);

      expect(
        screen.getByRole('heading', { name: /select your plan/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Flow 2: happy path — full completion (monthly)', () => {
    it('shows the correct plan, add-on, and total on the summary step', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));

      await user.click(
        screen.getByRole('checkbox', { name: /online service/i }),
      );
      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(screen.getByText(/arcade \(monthly\)/i)).toBeInTheDocument();
      expect(screen.getByText('$9/mo')).toBeInTheDocument();
      expect(screen.getByText(/online service/i)).toBeInTheDocument();
      expect(screen.getByText('+$1/mo')).toBeInTheDocument();
      expect(screen.getByText('+$10/mo')).toBeInTheDocument();
    });

    it('calls onSubmit with the correct data when the user confirms', async () => {
      const user = userEvent.setup();
      const { onSubmit } = renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));

      await user.click(
        screen.getByRole('checkbox', { name: /online service/i }),
      );
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /confirm/i }));

      expect(onSubmit).toHaveBeenCalledOnce();
      expect(onSubmit).toHaveBeenCalledWith({
        personalInfo: {
          name: 'Jane Doe',
          email: 'jane@example.com',
          phone: '1234567890',
        },
        planId: 'arcade',
        billingCycle: 'monthly',
        addOnIds: ['online-service'],
      });
    });

    it('shows the thank you screen after confirming', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /confirm/i }));

      expect(
        screen.getByRole('heading', { name: /thank you/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Flow 3: yearly billing cycle toggle', () => {
    it('updates plan prices on step 2 after toggling to yearly', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('switch', { name: /yearly/i }));

      expect(screen.getByText('$90/yr')).toBeInTheDocument();
    });

    it('shows yearly add-on prices on step 3 after toggling to yearly', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep2Yearly(user);

      expect(screen.getByText('+$10/yr')).toBeInTheDocument();
    });

    it('shows yearly prices and totals on the summary step', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep2Yearly(user);

      await user.click(
        screen.getByRole('checkbox', { name: /online service/i }),
      );
      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(screen.getByText(/arcade \(yearly\)/i)).toBeInTheDocument();
      expect(screen.getByText('$90/yr')).toBeInTheDocument();
      expect(screen.getByText('+$10/yr')).toBeInTheDocument();
      expect(screen.getByText('+$100/yr')).toBeInTheDocument();
    });
  });

  describe('Flow 4: "Change" link in the summary', () => {
    it('returns to step 2 and reflects a newly selected plan in the summary', async () => {
      const user = userEvent.setup();
      renderForm();

      // Complete steps 1–3 with default Arcade plan
      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /next step/i }));

      // On step 4, click Change
      await user.click(screen.getByRole('button', { name: /change/i }));

      // Should be back on step 2
      expect(
        screen.getByRole('heading', { name: /select your plan/i }),
      ).toBeInTheDocument();

      // Select Advanced plan
      await user.click(screen.getByRole('radio', { name: /advanced/i }));
      await user.click(screen.getByRole('button', { name: /next step/i }));

      // Step 3: advance
      await user.click(screen.getByRole('button', { name: /next step/i }));

      // Step 4: summary should reflect Advanced
      expect(screen.getByText(/advanced \(monthly\)/i)).toBeInTheDocument();
      expect(screen.getByText('$12/mo')).toBeInTheDocument();
    });
  });

  describe('Flow 5: back navigation preserves state', () => {
    it('retains add-on selections after navigating back and forward', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));

      // Step 3: select Larger storage
      await user.click(
        screen.getByRole('checkbox', { name: /larger storage/i }),
      );

      // Go back to step 2
      await user.click(screen.getByRole('button', { name: /go back/i }));

      // Advance back to step 3
      await user.click(screen.getByRole('button', { name: /next step/i }));

      // Larger storage should still be checked
      expect(
        screen.getByRole('checkbox', { name: /larger storage/i }),
      ).toBeChecked();
    });
  });

  describe('Flow 6: no add-ons selected', () => {
    it('shows no add-on line items in the summary when none are selected', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(screen.queryByText(/online service/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/larger storage/i)).not.toBeInTheDocument();
      expect(
        screen.queryByText(/customizable profile/i),
      ).not.toBeInTheDocument();
    });

    it('shows a total equal to just the plan price when no add-ons are selected', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /next step/i }));

      expect(screen.getByText('+$9/mo')).toBeInTheDocument();
    });
  });

  describe('Step progress indicator', () => {
    it('renders all four step indicators', () => {
      renderForm();

      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(screen.getByText('Step 2')).toBeInTheDocument();
      expect(screen.getByText('Step 3')).toBeInTheDocument();
      expect(screen.getByText('Step 4')).toBeInTheDocument();
    });

    it('keeps all four step indicators visible after advancing steps', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);

      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(screen.getByText('Step 2')).toBeInTheDocument();
      expect(screen.getByText('Step 3')).toBeInTheDocument();
      expect(screen.getByText('Step 4')).toBeInTheDocument();
    });
  });

  describe('Terminal state', () => {
    it('hides the navigation buttons after confirming', async () => {
      const user = userEvent.setup();
      renderForm();

      await advancePastStep1(user);
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /next step/i }));
      await user.click(screen.getByRole('button', { name: /confirm/i }));

      expect(
        screen.queryByRole('button', { name: /confirm/i }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /go back/i }),
      ).not.toBeInTheDocument();
    });
  });
});
