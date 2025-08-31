import "./Button.scss"

import classNames from "classnames"

import Icon from "@/components/Icon"

const Button = ({
  className,
  type = "button",
  href,
  target,
  /**
   * "" (default) | "transparent" | "black-10"
   */
  mode = "",
  label,
  isLabelHidden = false,
  iconName,
  /**
   * "before" | "after"
   */
  iconPosition = "before",
  hasFillIcon = false,
}) => {
  const isLink = href !== undefined

  const Component = isLink ? "a" : "button"

  const linkProps = { href, target }
  const buttonProps = { type }

  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  const iconComponent = iconName && (
    <Icon className="button__icon" hasFill={hasFillIcon} name={iconName} />
  )

  return (
    <Component
      aria-label={title}
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
