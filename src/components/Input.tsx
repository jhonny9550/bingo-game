import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useCallback, useState } from "react";

type InputState = "default" | "error" | "success" | "focus";

export type InputProps = {
  classes?: {
    root?: string;
    input?: string;
    leftIconContainer?: string;
    rightIconContainer?: string;
  };
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  state?: InputState;
  value: any;
};

const colors: Record<InputState, string> = {
  default: "input-default",
  focus: "input-primary",
  success: "input-success",
  error: "input-danger",
};

const Input: React.FC<InputProps> = ({ state = "default", ...props }) => {
  const [value, setValue] = useState(props.value);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (props.onChange) props.onChange(e);
        setValue(e.target.value);
      },
      [props.onChange]
    );

  const errorStateIcon = <ExclamationCircleIcon className="h-5 w-5" />;
  const successStateIcon = <CheckCircleIcon className="h-5 w-5" />;

  let endAdornment = null;
  if (props.rightIcon) endAdornment = props.rightIcon;
  if (state === "error") endAdornment = errorStateIcon;
  if (state === "success") endAdornment = successStateIcon;

  return (
    <div className={clsx(["input", colors[state], props.classes?.root])}>
      {props.leftIcon && (
        <div
          className={clsx([
            "input__adornment",
            props.classes?.leftIconContainer,
          ])}
        >
          {props.leftIcon}
        </div>
      )}
      <input
        className="input__inner"
        onChange={handleInputChange}
        value={value}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
      {!!endAdornment && (
        <div
          className={clsx([
            "input__adornment",
            props.classes?.rightIconContainer,
          ])}
        >
          {endAdornment}
        </div>
      )}
    </div>
  );
};

export default Input;
