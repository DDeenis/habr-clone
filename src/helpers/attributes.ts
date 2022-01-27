type ConditionalClass = Record<string, any>;

const getClassFromObject = (val: ConditionalClass) =>
  Object.keys(val)
    .map((k) => (val[k] ? k : ""))
    .join(" ");

export const classnames = (
  ...classes: (string | ConditionalClass | undefined)[]
) => {
  const mappedNames = classes.map((c) =>
    c instanceof Object ? getClassFromObject(c) : c ? c : ""
  );
  return mappedNames.join(" ");
};
