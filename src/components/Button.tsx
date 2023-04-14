import clsx from "clsx";
import React from "react";

export type ButtonColor =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "white";

export type ButtonFill = "clear" | "outlined" | "solid";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: ButtonColor;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  hidden?: boolean;
  fill?: ButtonFill;
};

const colors: Record<ButtonColor, string> = {
  primary: "btn-primary",
  success: "btn-success",
  warning: "btn-warning",
  danger: "btn-danger",
  white: "btn-white",
};

const fills: Record<ButtonFill, string> = {
  clear: "btn-clear",
  solid: "btn-solid",
  outlined: "btn-outlined",
};

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  fill = "solid",
  ...props
}) => {
  const colorClassName = colors[color];
  const fillClassName = fills[fill];

  return (
    <button
      type={props.type}
      className={clsx(["btn", colorClassName, fillClassName, props.className])}
      onClick={props.onClick}
      disabled={props.disabled}
      hidden={props.hidden}
    >
      {props.iconLeft}
      <p className="text-inherit">{props.children}</p>
      {props.iconRight}
    </button>
  );
};

export default Button;
