import styles from "./Button.module.css";
import { Spinner } from "../Spinner/Spinner";
import Link from "next/link";

export default function Button({
  variant,
  children,
  to,
  disabled,
  className,
  onClick,
  type,
  isLoading,
  small,
  target,
  rel,
  title,
  loadingWhite,
}) {
  return to ? (
    <LinkButton
      variant={variant}
      disabled={disabled}
      to={to}
      className={className}
      small={small}
      target={target}
      rel={rel}
      title={title}
    >
      {children}
    </LinkButton>
  ) : (
    <CustomButton
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      isLoading={isLoading}
      small={small}
      title={title}
      loadingWhite={loadingWhite}
    >
      {children}
    </CustomButton>
  );
}

function CustomButton({
  variant,
  children,
  className,
  disabled,
  onClick,
  type,
  isLoading,
  small,
  loadingWhite,
}) {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${styles["button__" + (variant || "primary")]
        } ${className || ""} ${small ? styles.button__small : ""}`}
      type={type || "button"}
      onClick={onClick}
    >
      {!isLoading || (isLoading && !small) ? children : ""}{" "}
      {isLoading ? (
        <Spinner white={loadingWhite} sm />
      ) : (
        ""
      )}
    </button>
  );
}

function LinkButton({
  variant,
  children,
  to,
  className,
  onClick,
  target,
  rel,
  title,
}) {
  return (
    <Link
      className={` ${styles.button} ${styles["button__" + (variant || "primary")]
        } ${className || ""}	block text-center`}
      href={to}
      onClick={onClick}
      target={target}
      rel={rel}
      title={title}
    >
      {children}
    </Link>
  );
}
