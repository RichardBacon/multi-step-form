import { render, screen } from '@testing-library/react';
import { type UserEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import MultiStepForm from '../components/wizard/MultiStepForm/MultiStepForm';

export interface PersonalInfoData {
  name?: string;
  email?: string;
  phone?: string;
}

const DEFAULT_PERSONAL_INFO: Required<PersonalInfoData> = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '1234567890',
};

export function renderForm() {
  const onSubmit = vi.fn();
  render(<MultiStepForm onSubmit={onSubmit} />);
  return { onSubmit };
}

export async function fillPersonalInfo(
  user: UserEvent,
  data: PersonalInfoData = {},
) {
  const { name, email, phone } = { ...DEFAULT_PERSONAL_INFO, ...data };
  await user.type(screen.getByLabelText(/name/i), name);
  await user.type(screen.getByLabelText(/email address/i), email);
  await user.type(screen.getByLabelText(/phone number/i), phone);
}

export async function advancePastStep1(
  user: UserEvent,
  data?: PersonalInfoData,
) {
  await fillPersonalInfo(user, data);
  await user.click(screen.getByRole('button', { name: /next step/i }));
}

export async function advancePastStep2Yearly(user: UserEvent) {
  await advancePastStep1(user);
  await user.click(screen.getByRole('button', { name: /yearly/i }));
  await user.click(screen.getByRole('button', { name: /next step/i }));
}
