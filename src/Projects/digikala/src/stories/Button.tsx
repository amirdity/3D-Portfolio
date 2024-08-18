import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  display: "block" | "flex";
  borderStyle: "solid" | "none";
  color?: string;
  padding?: string;
  justifyContent: "center";
  alignContent: "center";
  alignItems: "center";
  width?: number;
  height?: number;
  fontFamily: "IRANYekan";
  fontSize?: number;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  borderColor,
  display,
  borderRadius,
  borderWidth,
  borderStyle,
  color,
  padding,
  justifyContent,
  alignContent,
  alignItems,
  width,
  height,
  fontFamily,
  fontSize,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{
        backgroundColor,
        borderColor,
        borderRadius,
        borderWidth,
        borderStyle,
        display,
        color,
        padding,
        justifyContent,
        alignContent,
        alignItems,
        width,
        height,
        fontFamily,
        fontSize,
      }}
      {...props}
    >
      <img src="/asset/header/login-icon.svg" alt="ورود | ثبت نام" className="ml-1"/>
      {label}
    </button>
  );
};
