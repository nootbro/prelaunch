/**
 * Utility functions for formatting data in the BioIQ landing page
 */

/**
 * Format a number with a + or - sign
 * @param value The number to format
 * @returns Formatted string with sign
 */
export function formatWithSign(value: number): string {
  return value > 0 ? `+${value}` : `${value}`;
}

/**
 * Format a percentage value
 * @param value The percentage value
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format a value with its unit
 * @param value The value to format
 * @param unit The unit to append
 * @returns Formatted string with unit
 */
export function formatWithUnit(value: number | string, unit: string): string {
  return `${value}${unit}`;
}

/**
 * Format a number with commas for thousands
 * @param value The number to format
 * @returns Formatted number string with commas
 */
export function formatNumber(value: number): string {
  return value.toLocaleString();
}

/**
 * Format a date to a readable string
 * @param date The date to format
 * @param format The format to use (short, medium, long)
 * @returns Formatted date string
 */
export function formatDate(date: Date, format: 'short' | 'medium' | 'long' = 'medium'): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'short' ? 'numeric' : 'long',
    day: 'numeric',
  };
  
  if (format === 'long') {
    options.weekday = 'long';
  }
  
  return date.toLocaleDateString(undefined, options);
}

/**
 * Truncate a string to a maximum length
 * @param text The text to truncate
 * @param maxLength Maximum length before truncation
 * @param ellipsis Whether to add ellipsis
 * @returns Truncated string
 */
export function truncateText(text: string, maxLength: number, ellipsis: boolean = true): string {
  if (text.length <= maxLength) return text;
  return ellipsis ? `${text.slice(0, maxLength)}...` : text.slice(0, maxLength);
}

/**
 * Convert a status to a CSS class name
 * @param status The status value
 * @returns CSS class name
 */
export function statusToClassName(status: 'excellent' | 'good' | 'moderate' | 'attention'): string {
  const classMap = {
    excellent: 'text-excellent border-excellent',
    good: 'text-good border-good',
    moderate: 'text-moderate border-moderate',
    attention: 'text-attention border-attention',
  };
  
  return classMap[status] || '';
}

/**
 * Convert a status to a color value
 * @param status The status value
 * @returns Color hex code
 */
export function statusToColor(status: 'excellent' | 'good' | 'moderate' | 'attention'): string {
  const colorMap = {
    excellent: '#63D8BF',
    good: '#3B82F6',
    moderate: '#FFBE55',
    attention: '#FF8FA3',
  };
  
  return colorMap[status] || '';
}
