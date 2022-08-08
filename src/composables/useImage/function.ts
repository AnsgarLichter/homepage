/**
 * Returns image loaded by webpack.
 *
 * @param path path to the image which extends the base path
 */
export function useImage(path: string) {
  return new URL('../../assets/' + path, import.meta.url).href;
  //return import.meta.glob('../assets/' + path);
}
