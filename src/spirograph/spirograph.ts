export type Complex = {
  a: number;
  b: number;
};

export const getSpirograph = (
  outerRadius: number,
  innerRadius: number,
  lastOffset: number,
  degree: number
) => {
  let complex: Complex = { a: 0, b: 0 };

  // 1st
  const r1 = outerRadius - innerRadius;
  complex = {
    a: r1 * Math.cos((Math.PI / 180) * degree),
    b: r1 * Math.sin((Math.PI / 180) * degree),
  };

  // 2nd
  const r2 = lastOffset;
  const degree2 = degree * (outerRadius / innerRadius);
  complex.a += r2 * Math.cos((Math.PI / 180) * degree2 * -1);
  complex.b += r2 * Math.sin((Math.PI / 180) * degree2 * -1);

  return complex;
};
