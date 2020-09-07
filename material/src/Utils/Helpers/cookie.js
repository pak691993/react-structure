import Cookies from 'js-cookie';

export const setCookie = (name, value, expires = 1) => {
  return Cookies.set(name, value, expires);
};

export const getCookie = name => {
  return Cookies.get(name);
};

export const removeCookie = name => {
  return Cookies.remove(name);
};
