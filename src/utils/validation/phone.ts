import { formatPhoneHref } from '../strings';

export const phoneRegex = /^\+\d{6,14}$/;

export function isPhone(string: string): boolean {
    return phoneRegex.test(`+${formatPhoneHref(string)}`);
}
