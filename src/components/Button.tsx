import clsx from "clsx";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export type ButtonColor = "primary" | "secondary" | "warning" | "danger";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  color?: ButtonColor;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const colors: Record<ButtonColor, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  warning: "btn-warning",
  danger: "btn-danger",
};

const Button: React.FC<ButtonProps> = ({ color = "primary", ...props }) => {
  const colorClassName = colors[color];
  return (
    <button
      className={clsx(["btn", colorClassName, props.className])}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <ArrowRightIcon className="h-5 w-5" />
      <p className="text-inherit">{props.children}</p>
    </button>
  );
};

export default Button;
