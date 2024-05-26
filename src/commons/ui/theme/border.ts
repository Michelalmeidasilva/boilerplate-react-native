export const borderRadius = {
  /**
   * Micro border radius value, used for elements requiring extremely small corner rounding.
   * Provides an almost imperceptible rounded appearance, suitable for very subtle effects.
   */
  micro: '1px', // Micro border radius value = 1px

  /**
   * Tiny border radius value, used for elements requiring very small corner rounding.
   * Provides a minimal rounded appearance, suitable for icons, badges, etc.
   */
  tiny: '2px', // Tiny border radius value = 2px

  /**
   * Small border radius value, typically used for elements with small corners.
   * Gives a slight rounded appearance, suitable for buttons, inputs, etc.
   */
  small: '4px', // Small border radius value  = 4px

  /**
   * Medium border radius value, suitable for elements with average corner rounding.
   * Offers a balanced rounded appearance, commonly used for cards, panels, etc.
   */
  medium: '8px', // Medium border radius value  = 8px

  /**
   * Large border radius value, used for elements requiring significant corner rounding.
   * Provides a noticeably rounded appearance, often used for modals, dialog boxes, etc.
   */
  large: '16px', // Large border radius value   = 16px

  /**
   * Extra large border radius value, used for elements with very large corner rounding.
   * Gives a heavily rounded appearance, suitable for prominent UI components.
   */
  extraLarge: '24px', // Extra large border radius value    = 24px

  /**
   * Massive border radius value, used for elements with extremely large corner rounding.
   * Provides a dramatically rounded appearance, suitable for distinctive UI elements.
   */
  massive: '48px', // Massive border radius value    = 48px
};

export type BorderRadius = typeof borderRadius;
