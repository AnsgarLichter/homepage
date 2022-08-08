import { useMediaQuery } from "@/composables";

export function useIsDarkModePreferred() {
  const query = '(prefers-color-scheme: dark)';

  return useMediaQuery(query);
}