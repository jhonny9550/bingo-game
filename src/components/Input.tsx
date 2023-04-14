import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import clsx from "clsx";

type InputState = "default" | "error" | "success" | "focus";

type InputSizes = "tiny" | "small" | "medium" | "large";

export type InputProps = {
  state?: InputState;
  size?: InputSizes;
  value?: any;
};

const colors: Record<InputState, string> = {
  default: "",
  focus: "input-primary",
  success: "input-success",
  error: "input-error",
};

const sizes: Record<InputSizes, string> = {
  tiny: "input-xs",
  small: "input-sm",
  medium: "input-md",
  large: "input-lg",
};

const Input = ({
  state = "default",
  size = "medium",
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & InputProps) => {
  const [value, setValue] = useState(props.value);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setValue(e.target.value);
      if (props.onChange) props.onChange(e);
    },
    [props.onChange]
  );

  const colorClassName = colors[state];
  const sizeClassName = sizes[size];

  return (
    <input
      className={clsx([
        "input input-bordered",
        colorClassName,
        sizeClassName,
        props.className,
      ])}
      onChange={handleInputChange}
      value={value}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
};

export default Input;
