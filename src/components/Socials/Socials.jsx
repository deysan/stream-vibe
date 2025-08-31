import "./Socials.scss"

import classNames from "classnames"

import Button from "@/components/Button"

const Socials = ({ className, links = [] }) => (
  <div className={classNames(className, "soc1als")}>
    <ul className="soc1als__list">
      {links.map(({ label, iconName }, index) => (
        <li className="soc1als__item" key={index}>
          <Button
            className="soc1als__link"
            hasFillIcon
            iconName={iconName}
            isLabelHidden
            label={label}
            mode="black-10"
            target="_blank"
          />
        </li>
      ))}
    </ul>
  </div>
)

export default Socials
