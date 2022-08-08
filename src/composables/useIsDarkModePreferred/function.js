import { useMediaQuery } from "@/composables";

const useIsDarkModePreferred = () => {
  const query = '(prefers-color-scheme: dark)';

  return useMediaQuery(query);
};

export { useIsDarkModePreferred };