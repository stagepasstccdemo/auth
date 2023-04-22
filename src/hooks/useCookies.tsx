export const useCookies = () => {
  const setCookie = (name: string, value: boolean, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}`;
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }

    return undefined;
  };

  const checkCookie = (name: string) => {
    const cookie = getCookie(name);
    if (cookie !== undefined) {
      return true;
    }

    return false;
  };

  return { setCookie, getCookie, checkCookie };
};
