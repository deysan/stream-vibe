import "./Icon.scss"

import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"

const Icon = ({ className, name, hasFill }) => (
  <span className={classNames(className, "icon")}>
    <MinistaIcon
      fill={hasFill ? "currentColor" : "none"}
      iconId={name}
      stroke={hasFill ? "none" : "currentColor"}
    />
  </span>
)

export default Icon
