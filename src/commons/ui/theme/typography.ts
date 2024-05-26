export const typography = {
  /**
   * Font family used throughout the application.
   * Roboto is a popular sans-serif typeface known for its readability and versatility.
   */
  fontFamily: 'Roboto, sans-serif', // Font family: "Roboto, sans-serif"

  /**
   * Base font size for the application.
   * Used as the default font size for most text elements.
   */
  baseFontSize: '16px', // Base font size: "16px"

  /**
   * Font sizes for different text elements in the application.
   * Includes sizes for headings, body text, etc.
   */
  fontSizes: {
    heading1: '2.5rem', // Font size for heading level 1: "2.5rem"
    heading2: '2rem', // Font size for heading level 2: "2rem"
    body1: '1rem', // Font size for regular body text: "1rem"
    body2: '0.875rem', // Font size for smaller body text: "0.875rem"
  },

  /**
   * Font weights for different text elements in the application.
   * Specifies the thickness of the text, ranging from light to bold.
   */
  fontWeights: {
    light: 300, // Light font weight: 300
    regular: 400, // Regular font weight: 400
    medium: 500, // Medium font weight: 500
    bold: 700, // Bold font weight: 700
  },

  /**
   * Line heights for different text elements in the application.
   * Determines the vertical spacing between lines of text.
   */
  lineHeights: {
    heading1: '3rem', // Line height for heading level 1: "3rem"
    heading2: '2.5rem', // Line height for heading level 2: "2.5rem"
    body1: '1.5rem', // Line height for regular body text: "1.5rem"
    body2: '1.25rem', // Line height for smaller body text: "1.25rem"
  },
};

export type Typography = typeof typography;
