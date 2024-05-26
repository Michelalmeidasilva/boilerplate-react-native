export const spacing = {
  /** Base unit of spacing, typically used as a multiple for other spacing values */
  unit: '8px', // Unit spacing value, often used as the base unit - 8px

  /** Small spacing value, half of the base unit */
  small: '4px', // Smaller spacing value, often used for minor adjustments - 4px

  /** Medium spacing value, equal to the base unit   - 8px */
  medium: '8px', // Medium spacing value, same as the base unit

  /** Large spacing value, twice the base unit - 16px*/
  large: '16px', // Larger spacing value, used for more significant gaps

  /** Extra large spacing value, four times the base unit -32px */
  extraLarge: '32px', // Extra large spacing value, used for very large gaps
};

export type Spacing = typeof spacing;
