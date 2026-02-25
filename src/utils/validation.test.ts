import { describe, expect, it } from 'vitest';
import {
  getPersonalInfoErrors,
  isPersonalInfoValid,
  isValidEmail,
  isValidPhone,
} from './validation';

describe('isValidEmail', () => {
  it('accepts a standard email address', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('accepts an email with subdomains', () => {
    expect(isValidEmail('user@mail.example.com')).toBe(true);
  });

  it('accepts an email with plus addressing', () => {
    expect(isValidEmail('user+tag@example.com')).toBe(true);
  });

  it('rejects an email with no @ symbol', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  it('rejects an email with no domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('rejects an email with no TLD', () => {
    expect(isValidEmail('user@example')).toBe(false);
  });

  it('rejects an empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('rejects an email with spaces', () => {
    expect(isValidEmail('user @example.com')).toBe(false);
  });
});

describe('isValidPhone', () => {
  it('accepts a standard 10-digit number', () => {
    expect(isValidPhone('1234567890')).toBe(true);
  });

  it('accepts a number with a leading + country code', () => {
    expect(isValidPhone('+1234567890')).toBe(true);
  });

  it('accepts a number with spaces', () => {
    expect(isValidPhone('07911 12345')).toBe(true);
  });

  it('accepts a number with dashes', () => {
    expect(isValidPhone('123-456-789')).toBe(true);
  });

  it('accepts a number with parentheses', () => {
    expect(isValidPhone('(123)456789')).toBe(true);
  });

  it('rejects a number that is too short', () => {
    expect(isValidPhone('12345')).toBe(false);
  });

  it('rejects an empty string', () => {
    expect(isValidPhone('')).toBe(false);
  });

  it('rejects a string with letters', () => {
    expect(isValidPhone('abc1234567')).toBe(false);
  });
});

describe('getPersonalInfoErrors', () => {
  const validInfo = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '1234567890',
  };

  it('returns no errors for valid input', () => {
    expect(getPersonalInfoErrors(validInfo)).toEqual({});
  });

  it('returns a name error when name is empty', () => {
    const errors = getPersonalInfoErrors({ ...validInfo, name: '' });
    expect(errors.name).toBe('This field is required');
  });

  it('returns a name error when name is only whitespace', () => {
    const errors = getPersonalInfoErrors({ ...validInfo, name: '   ' });
    expect(errors.name).toBe('This field is required');
  });

  it('returns an email required error when email is empty', () => {
    const errors = getPersonalInfoErrors({ ...validInfo, email: '' });
    expect(errors.email).toBe('This field is required');
  });

  it('returns an email format error when email is malformed', () => {
    const errors = getPersonalInfoErrors({
      ...validInfo,
      email: 'not-an-email',
    });
    expect(errors.email).toBe('Please enter a valid email address');
  });

  it('returns a phone required error when phone is empty', () => {
    const errors = getPersonalInfoErrors({ ...validInfo, phone: '' });
    expect(errors.phone).toBe('This field is required');
  });

  it('returns a phone format error when phone is invalid', () => {
    const errors = getPersonalInfoErrors({ ...validInfo, phone: '123' });
    expect(errors.phone).toBe('Please enter a valid phone number');
  });

  it('returns errors for all three fields when all are empty', () => {
    const errors = getPersonalInfoErrors({ name: '', email: '', phone: '' });
    expect(Object.keys(errors)).toHaveLength(3);
  });

  it('does not return a name error when input is valid', () => {
    const errors = getPersonalInfoErrors(validInfo);
    expect(errors.name).toBeUndefined();
  });
});

describe('isPersonalInfoValid', () => {
  it('returns true when all fields are valid', () => {
    expect(
      isPersonalInfoValid({
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '1234567890',
      }),
    ).toBe(true);
  });

  it('returns false when any field is invalid', () => {
    expect(
      isPersonalInfoValid({
        name: '',
        email: 'jane@example.com',
        phone: '1234567890',
      }),
    ).toBe(false);
  });

  it('returns false when all fields are empty', () => {
    expect(isPersonalInfoValid({ name: '', email: '', phone: '' })).toBe(false);
  });
});
