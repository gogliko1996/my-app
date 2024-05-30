export const pixelsToRem = (pixels: number | string) => {
  if (typeof pixels === "string") {
    return pixels;
  }
  const baseFontSize = 16;
  const remSize = pixels / baseFontSize;
  return `${remSize}${"rem"}`;
};
