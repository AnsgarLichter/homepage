/**
 * Returns image loaded by vite.
 * To be able to use the images with this function you need to import 
 * the static asset and set the imported URL as path. 
 *
 * @param path path to the image
 */
export function useImage(path: string) {
  return new URL(path, import.meta.url).href;
}
