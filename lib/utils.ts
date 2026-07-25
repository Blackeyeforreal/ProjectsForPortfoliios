import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description Utility function to merge class names with Tailwind CSS and handle dynamic classes.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}