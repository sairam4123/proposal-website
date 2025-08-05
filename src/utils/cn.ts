import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Utility function to conditionally join and merge class names
export function cn(...classes: (string | undefined | null | false)[]): string {
    return twMerge(clsx(...classes));
}