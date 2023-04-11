export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires
}

export const getCookie = (name: string) => {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}