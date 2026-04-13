export const getStoredSessionValueOrDefault = <T>(key: string, defaultValue: T) => {
  const sessionValue = sessionStorage.getItem(key);

  if (!sessionValue) {
    return defaultValue;
  }

  return JSON.parse(sessionValue);
};
