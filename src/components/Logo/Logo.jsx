import "./Logo.scss"

import classNames from "classnames"

const Logo = ({ className, loading = "lazy" }) => {
  const title = "Home"

  return (
    <a
      aria-label={title}
      className={classNames(className, "logo")}
      href="/"
      title={title}
    >
      <img
        alt=""
        className="logo__image"
        height={60}
        loading={loading}
        src="/logo.svg"
        width={199}
      />
    </a>
  )
}

export default Logo
