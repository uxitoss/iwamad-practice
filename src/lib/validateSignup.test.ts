import { test, expect } from 'vitest';
import { validateSignup } from './validateSignup';

const valid = { fullName: 'Aliya Nurlanovna', email: 'aliya@example.com', tickets: '2' };

test('valid values give no errors', () => {
  expect(validateSignup(valid, 10)).toEqual({});
});

test('0 tickets is not allowed', () => {
  expect(validateSignup({ ...valid, tickets: '0' }, 10)).toEqual({ tickets: 'Choose 1 to 4 tickets' });
});

test('5 tickets is too many', () => {
  expect(validateSignup({ ...valid, tickets: '5' }, 10)).toEqual({ tickets: 'Choose 1 to 4 tickets' });
});

test('1.5 tickets is not a whole number', () => {
  expect(validateSignup({ ...valid, tickets: '1.5' }, 10)).toEqual({ tickets: 'Choose 1 to 4 tickets' });
});

test('4 tickets is the maximum and is allowed', () => {
  expect(validateSignup({ ...valid, tickets: '4' }, 10)).toEqual({});
});

test('more tickets than seats left shows how many are left', () => {
  expect(validateSignup({ ...valid, tickets: '3' }, 2)).toEqual({ tickets: 'Only 2 seats left' });
});
