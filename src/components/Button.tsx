import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "warning"
  | "error"
  | "ghost";

export type ButtonSize = "large" | "normal" | "small" | "tiny";

export type ButtonShape = "default" | "square" | "circle";

export type ButtonExpand = "default" | "block" | "wide";

export type ButtonProps = {
  className?: string;
  color?: ButtonColor;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  hidden?: boolean;
  outline?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  expand?: ButtonExpand;
  loading?: boolean;
  to?: string;
};

const colors: Record<ButtonColor, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  neutral: "btn-neutral",
  info: "btn-info",
  warning: "btn-warning",
  error: "btn-error",
  ghost: "btn-ghost",
};

const sizes: Record<ButtonSize, string> = {
  large: "btn-lg",
  normal: "",
  small: "btn-sm",
  tiny: "btn-xs",
};

const shapes: Record<ButtonShape, string> = {
  default: "",
  square: "btn-square",
  circle: "btn-circle",
};

const expands: Record<ButtonExpand, string> = {
  default: "",
  wide: "btn-wide",
  block: "btn-block",
};

const Button = ({
  color = "primary",
  size = "normal",
  shape = "default",
  expand = "default",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const colorClassName = colors[color];
  const sizeClassName = sizes[size];
  const shapeClassName = shapes[shape];
  const expandClassName = expands[expand];

  const renderButton = (
    <button
      type={props.type}
      className={clsx([
        "btn",
        colorClassName,
        sizeClassName,
        shapeClassName,
        expandClassName,
        {
          "btn-outline": props.outline,
          loading: props.loading,
          "gap-2": props.iconLeft || props.iconRight,
        },
        props.className,
      ])}
      onClick={props.onClick}
      disabled={props.disabled}
      hidden={props.hidden}
    >
      {props.iconLeft}
      <p className="text-inherit">{props.children}</p>
      {props.iconRight}
    </button>
  );

  if (props.to) {
    return <Link to={props.to}>{renderButton}</Link>;
  }

  return renderButton;
};

export default Button;
