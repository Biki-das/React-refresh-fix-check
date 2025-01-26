import { forwardRef, memo } from "react";

// try uncommenting one of the following lines and check dev server ;

export function Component() {
  return <h1>This is a component</h1>;
}

// export const Component = memo(function Test() {
//   return <h1>This is a memo component</h1>;
// });

// export const Component = forwardRef(function Test() {
//   return <h1>Ref component</h1>;
// });
