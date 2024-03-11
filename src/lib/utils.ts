/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-shadow */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string => {
  const names = name.split(' ');
  return names.map((name) => name.charAt(0)).join('');
};
