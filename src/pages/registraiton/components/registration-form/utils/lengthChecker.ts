import { Required } from '../models';

export function lengthChecker(label: string, minLength: number, textContent: string): Required {
  if (!label.length) return { isRequired: label.length === 0, textContent: 'field required' };
  if (label.trim().length < minLength) return { isRequired: true, textContent };
  return { isRequired: false, textContent: 'name need more then 8' };
}

export function emailChecker(email: string): Required {
  if (!validateEmail(email)) return { isRequired: true, textContent: 'not valid email address' };
  return { isRequired: false, textContent: '' };
}

export function phoneChecker(phoneNumber: string): Required {
  const isValidPhoneLength = phoneNumber.length === 11;
  const isAllNumbers = !!phoneNumber.match(/^(\d)*?([0-9])?$/gm);

  return {
    isRequired: !(isAllNumbers && isValidPhoneLength),
    textContent: 'no valid phone',
  };
}

export function validateEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function formatPhoneNumber(phone: string): string {
  let formatPhone = '';
  if (phone.length === 1) {
    formatPhone = [phone.slice(0, 1), ''].join('-');
  }
  if (phone.length > 1 && phone.length < 5) {
    formatPhone = [phone.slice(0, 1), phone.slice(1, 4)].join('-');
  }
  if (phone.length >= 5 && phone.length < 8) {
    formatPhone = [phone.slice(0, 1), phone.slice(1, 4), phone.slice(4, 7)].join('-');
  }
  if (phone.length >= 8 && phone.length < 10) {
    formatPhone = [phone.slice(0, 1), phone.slice(1, 4), phone.slice(4, 7), phone.slice(7, 9)].join('-');
  }
  if (phone.length >= 10) {
    formatPhone = [phone.slice(0, 1), phone.slice(1, 4), phone.slice(4, 7), phone.slice(7, 9), phone.slice(9, 11)].join(
      '-'
    );
  }
  return formatPhone;
}

export function reformatPhoneNumber(phone: string): string {
  return phone.replaceAll('-', '');
}
