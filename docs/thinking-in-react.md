# Thinking in React

This document defines the design decisions for the multi-step form **before implementation**. All behaviour, component responsibilities, state ownership, and data flow are specified to ensure the implementation is intentional and maintainable.

---

## 1. Behaviour

### Navigation

- Linear progression through steps 1–4, followed by a terminal thank-you step (step 5)
- `currentStep` ranges from 1–5; `StepProgress` displays steps 1–4 only
- Forward/backward navigation via buttons
- One non-linear transition: "Change" link on summary (step 4) returns to plan selection (step 2)
- All form data persists across navigation (including when changing plans)
- Step indicator is informational only (not interactive)
- Layout responds to viewport, behaviour remains constant

### Validation

- Step 1 requires all three fields to be non-empty before proceeding
  - Email must match standard email format
  - Phone must contain 10-11 digits (UK phone numbers)
- Step 2 requires plan selection before proceeding
- Add-ons (step 3) are optional
- Validation blocks progression but does not disable navigation controls

### Submission

- On confirmation, form invokes `onSubmit(formData)` callback and transitions to thank-you step
- Parent component handles submission side effects (API calls, analytics, routing)
- Form component is agnostic to submission implementation

### Accessibility

- Form fields use semantic labels and ARIA attributes
- Validation errors announced to screen readers (`aria-invalid`, `aria-describedby`)
- Keyboard navigation supported throughout
- Focus management on step transitions

---

## 2. Component Hierarchy

```
MultiStepForm
├─ StepProgress
│  └─ StepIndicator × 4
└─ StepLayout
   └─ ActiveStep
      ├─ PersonalInfoStep
      │  ├─ StepHeader
      │  ├─ PersonalInfoForm
      │  │  └─ FormField × 3
      │  └─ StepActions
      │     └─ PrimaryButton (Next Step)
      │
      ├─ PlanSelectionStep
      │  ├─ StepHeader
      │  ├─ PlanSelector
      │  │  └─ PlanOption × 3
      │  ├─ BillingCycleToggle
      │  └─ StepActions
      │     ├─ SecondaryButton (Go Back)
      │     └─ PrimaryButton (Next Step)
      │
      ├─ AddOnSelectionStep
      │  ├─ StepHeader
      │  ├─ AddOnSelector
      │  │  └─ AddOnOption × 3
      │  └─ StepActions
      │     ├─ SecondaryButton (Go Back)
      │     └─ PrimaryButton (Next Step)
      │
      ├─ SummaryStep
      │  ├─ StepHeader
      │  ├─ SummaryContent
      │  ├─ TotalRow
      │  └─ StepActions
      │     ├─ SecondaryButton (Go Back)
      │     └─ PrimaryButton (Confirm)
      │
      └─ ThankYouStep
```

**Responsibilities:**  
`MultiStepForm` owns wizard flow and submission draft. `StepProgress` displays current step. `StepLayout` provides shared layout shell. Step components handle individual step logic. `StepActions` provides consistent button layout and spacing.

---

## 3. Data Model

**Plans:**

```typescript
type Plan = {
  id: 'arcade' | 'advanced' | 'pro';
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
};
```

**Add-ons:**

```typescript
type AddOn = {
  id: 'online-service' | 'larger-storage' | 'customizable-profile';
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};
```

**Form submission payload:**

```typescript
type FormData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  planId: Plan['id'];
  billingCycle: 'monthly' | 'yearly';
  addOnIds: AddOn['id'][];
};
```

---

## 4. State Architecture

### Source of truth (persists until confirmation)

Owned by `MultiStepForm`. Forms the submission payload:

- `currentStep` — 1–5 (steps 1–4 are wizard steps, step 5 is thank-you)
- `personalInfo` — name, email, phone
- `planId` — selected plan identifier
- `billingCycle` — `'monthly' | 'yearly'`
- `addOnIds` — array of selected add-on identifiers

### Local UI state (ephemeral)

Owned by step components. Presentation-only:

- `attemptedSubmit` — controls error visibility in `PersonalInfoForm`

### Derived values (computed during render)

Computed via shared pure functions (e.g., `calculateTotal(formData, plans, addOns)`):

- Total cost
- Summary display rows
- Per-step validity

---

## 5. Data Flow

**Down (props):**  
State flows from `MultiStepForm` to step components. Derived values computed where displayed.

**Up (callbacks):**

```typescript
onNext() / onBack()
onGoToStep(step: 1 | 2 | 3 | 4)
onPersonalInfoChange(field: 'name' | 'email' | 'phone', value: string)
onSelectPlan(planId: Plan['id'])
onSetBillingCycle(cycle: 'monthly' | 'yearly')
onToggleAddOn(addOnId: AddOn['id'])
onSubmit(formData: FormData)
```

**Timing:**  
Selections update immediately (no local staging). Validation runs centrally when `onNext()` is invoked; if invalid, navigation is blocked and errors are shown.

---

## 6. Technical Decisions

**State management:** `useState` (sufficient for this complexity)

**Data sharing:** Prop drilling (Context unnecessary)

**Data source:** Static configuration (no remote data)

**Validation UX:**

- Errors shown on first "Next Step" attempt (immediate, no debounce)
- Post-attempt: fields revalidate on change (300ms debounce for responsiveness)
- Pre-attempt: no validation errors shown while typing

---

## 7. Non-Goals

The following are explicitly out of scope for this implementation:

- State persistence across browser refresh
- Direct navigation via step indicator clicks
- Backend integration (form is submission-agnostic via callback)
- Multi-language support

---

## Summary

The multi-step form is a **single evolving draft** edited across steps. All behaviour, responsibilities, and data flow are defined before implementation to ensure simple, predictable code with intentional UX and locally scoped changes.
