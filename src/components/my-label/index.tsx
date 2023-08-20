import { FC } from "react";

import "./styles.css";

interface Props {
  label: string;
  size?: "normal" | "h1" | "h2" | "h3";
  allCaps?: boolean;
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  fontColor?: string;
}

const MyLabel: FC<Props> = ({
  label,
  size = "normal",
  allCaps,
  color = "text-primary",
  fontColor,
}) => (
  <span className={`${size} ${color} label`} style={{ color: fontColor }}>
    {allCaps ? label.toLocaleUpperCase() : label}
  </span>
);

export default MyLabel;
