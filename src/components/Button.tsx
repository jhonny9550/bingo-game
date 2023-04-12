import clsx from "clsx";
import React from "react";

export type ButtonColor =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "white";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: ButtonColor;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
};

const colors: Record<ButtonColor, string> = {
  primary: "btn-primary",
  success: "btn-success",
  warning: "btn-warning",
  danger: "btn-danger",
  white: "btn-white",
};

const Button: React.FC<ButtonProps> = ({ color = "primary", ...props }) => {
  const colorClassName = colors[color];
  return (
    <button
      type={props.type}
      className={clsx(["btn", colorClassName, props.className])}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.iconLeft}
      <p className="text-inherit">{props.children}</p>
      {props.iconRight}
    </button>
  );
};

export default Button;
