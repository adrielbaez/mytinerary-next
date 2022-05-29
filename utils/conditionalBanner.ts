export const conditionalBanner = (number: number) => {
  switch (number) {
    case 0:
      return "flex-start";
    case 1:
      return "center";
    case 2:
      return "flex-end";

    default:
      return "center";
  }
};
