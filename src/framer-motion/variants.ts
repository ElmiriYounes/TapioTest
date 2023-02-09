export const variantBounce = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 10,
    },
  },
  exit: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 10,
    },
  },
};

export const variantFormMsg = {
  enter: {
    y: 0,
    transition: { type: "spring", stiffness: 1000, damping: 10 },
  },
  exit: {
    y: -50,
    transition: {},
  },
};

export const variantModalApears = {
  initial: {
    y: -50,
  },
  show: {
    y: 0,
    transition: { type: "spring", stiffness: 1000, damping: 10 },
  },
};

export const variantMode = {
  light: {
    x: 0,
    transition: { duration: 0.3 },
  },
  dark: {
    x: "20px",
    transition: { duration: 0.3 },
  },
};
