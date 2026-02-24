import { type PersonalInfo } from '../types';

export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isValidPhone = (value: string): boolean =>
  /^\+?[\d\s\-().]{10,11}$/.test(value.replace(/\s/g, ''));

export const getPersonalInfoErrors = (
  info: PersonalInfo,
): Partial<Record<keyof PersonalInfo, string>> => {
  const errors: Partial<Record<keyof PersonalInfo, string>> = {};

  if (!info.name.trim()) {
    errors.name = 'This field is required';
  }

  if (!info.email.trim()) {
    errors.email = 'This field is required';
  } else if (!isValidEmail(info.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!info.phone.trim()) {
    errors.phone = 'This field is required';
  } else if (!isValidPhone(info.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};

export const isPersonalInfoValid = (info: PersonalInfo): boolean =>
  Object.keys(getPersonalInfoErrors(info)).length === 0;
