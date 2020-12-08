import { defaultUrl } from "./constants";

export const emptyStringToNull = function (
  value: string
): string | undefined | null {
  if (value === null) {
    return null;
  }

  const string = value.trim();

  return string === "" ? undefined : string;
};

export const getUrlPath = (path: string, url: string = defaultUrl): string =>
  url + path;
