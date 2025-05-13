export const getImageUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return new URL(`${base}src/assets/${path}`, import.meta.url).href;
};
