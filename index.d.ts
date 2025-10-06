/**
 * Sri Lanka Utilities Package - Type Definitions
 */

/**
 * Validate Sri Lankan NIC numbers (old and new formats).
 * @param nic - NIC number as a string
 * @returns true if valid, false otherwise
 */
export function validateNIC(nic: string): boolean;

/**
 * Validate Sri Lankan phone numbers (Dialog, Mobitel, Hutch, Airtel, SLT, etc.).
 * @param phone - phone number as a string
 * @returns true if valid, false otherwise
 */
export function validatePhone(phone: string): boolean;

/**
 * Format number as Sri Lankan Rupees.
 * Example: 1234567 → "Rs. 1,234,567"
 * @param amount - number to format
 * @returns formatted string
 */
export function formatCurrency(amount: number): string;

/**
 * Convert a date to Sinhala calendar format.
 * @param date - JavaScript Date object
 * @returns Sinhala formatted date string
 */
export function convertToSinhalaDate(date: Date): string;

/**
 * Convert a date to Tamil calendar format.
 * @param date - JavaScript Date object
 * @returns Tamil formatted date string
 */
export function convertToTamilDate(date: Date): string;
