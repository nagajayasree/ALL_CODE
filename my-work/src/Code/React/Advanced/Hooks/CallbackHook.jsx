import React from "react";
import { useCallback } from "react";

const mathOp = useCallback(() => {
  addOperands(a, b);
}, [a, b]);

export default mathOp;
