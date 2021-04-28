export const buildPath = (...paths) => paths.join("/");

export const toQueryString = (params) =>
  Object.keys(params)
    .filter((key) => params[key] !== undefined)
    .map((key) => {
      const keyURI = encodeURIComponent(key);
      const paramURI = encodeURIComponent(params[key]);
      return `${keyURI}=${paramURI}`;
    })
    .join("&");
