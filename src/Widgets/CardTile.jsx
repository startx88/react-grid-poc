import React from "react";
import Icons from "../UI/Icons";

// card title
const CardTile = ({
  children,
  icon,
  iconColor,
  iconBg,
  className,
  bottomIconData,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={["card-tile card-tile-wider", className].join(" ")}
    >
      <div
        className="card-tile-icon"
        style={{ color: iconColor, backgroundColor: iconBg }}
      >
        <Icons icon={icon} />
      </div>
      <div className="card-tile-text">
        {children}
        {bottomIconData && (
          <ul className="inline">
            {bottomIconData.map((item, index) => (
              <li key={item.iconColor + index}>
                <Icons iconColor={item.iconColor} icon={item.icon} />{" "}
                {item.range}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardTile;
