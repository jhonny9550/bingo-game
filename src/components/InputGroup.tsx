import clsx from "clsx";
import { PropsWithChildren } from "react";

type InputGroupSize = "tiny" | "small" | "medium" | "large";

export type InputGroupProps = {
  className?: string;
  size?: InputGroupSize;
};

const sizes: Record<InputGroupSize, string> = {
  tiny: "input-group-xs",
  small: "input-group-sm",
  medium: "input-group-md",
  large: "input-group-lg",
};

const InputGroup = ({
  size = "small",
  ...props
}: PropsWithChildren<InputGroupProps>) => {
  const sizeClassName = sizes[size];

  return (
    <div className={clsx(["input-group", sizeClassName])}>{props.children}</div>
  );
};

export default InputGroup;
