/**
 * Returns image loaded by webpack.
 *
 * @param path path to the image which extends the base path
 */
export function useImage(path: string) {
  return require("@/assets/" + path);
}
