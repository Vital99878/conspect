import { validateEmail } from '../utils';
import { queriesToFilter } from '../../../../../components/multipleFilter/utils';

test('should validate input form', () => {
  // expect(validateEmail('?first=true&third=true')).toBeTruthy()
  expect(validateEmail('Email@email')).toBeFalsy();
  expect(validateEmail('Email@email.')).toBeFalsy();
  expect(validateEmail('Email_email.com')).toBeFalsy();
  expect(validateEmail('Email_email_com')).toBeFalsy();
  expect(validateEmail('Email@email.com')).toBeTruthy();
});
