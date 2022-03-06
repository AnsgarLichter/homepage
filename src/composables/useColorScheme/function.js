/**
 * Returns the different colors of the app's color scheme.
 *
 * @returns {Object} primaryColor, primaryColorLight, primaryColorDark, secondaryColor, secondaryColorLight, secondaryColorDark, accentColor
 */
const useColorScheme = () => {
  const documentComputedStyle = getComputedStyle(document.documentElement);

  const primaryColor = documentComputedStyle.getPropertyValue('--primary-color');
  const primaryColorLight = documentComputedStyle.getPropertyValue('--primary-color-light');
  const primaryColorDark = documentComputedStyle.getPropertyValue('--primary-color-dark');
  const secondaryColor = documentComputedStyle.getPropertyValue('--secondary-color');
  const secondaryColorLight = documentComputedStyle.getPropertyValue('--secondary-color-light');
  const secondaryColorDark = documentComputedStyle.getPropertyValue('--secondary-color-dark');
  const accentColor = documentComputedStyle.getPropertyValue('--accent-color');

  return {
    primaryColor,
    primaryColorLight,
    primaryColorDark,
    secondaryColor,
    secondaryColorLight,
    secondaryColorDark,
    accentColor
  };
};

export { useColorScheme };
