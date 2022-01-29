type ConditionalClass = Record<string, any>;

const getClassFromObject = (val: ConditionalClass) => {
  return Object.keys(val)
    .map((k) => (Boolean(val[k]) ? k : ""))
    .join(" ");
};

export const classnames = (
  ...classes: (string | ConditionalClass | undefined)[]
) => {
  const mappedNames = classes.map((c) =>
    c instanceof Object ? getClassFromObject(c) : c ? c : ""
  );
  return mappedNames.join(" ");
};
