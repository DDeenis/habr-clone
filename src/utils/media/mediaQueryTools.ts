const tailwindBreakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

const breakpointsValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const breakpoints = {
  sm: { minWidth: breakpointsValues.sm },
  md: { minWidth: breakpointsValues.md },
  lg: { minWidth: breakpointsValues.lg },
  xl: { minWidth: breakpointsValues.xl },
  "2xl": { minWidth: breakpointsValues["2xl"] },
};
