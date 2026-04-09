export const wrap = (min , max , v ) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export const clamp = (min , max , v) => {
  return Math.min(Math.max(v, min), max);
}