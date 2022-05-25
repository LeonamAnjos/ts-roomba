import React, { ReactNode } from "react";
import "../styles/Grid.css";

type ColumnProps = {
  children?: ReactNode | undefined;
};

const Column = ({ children }: ColumnProps) => {
  return <div className="Column">{children}</div>;
};

export default Column;
