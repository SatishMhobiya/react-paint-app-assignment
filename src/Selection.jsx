import { useState } from "react";
import "./styles/child.css";

export default function Selection(props) {
  const { applyColor } = props;
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });
  return (
    <>
      <div
        className="fix-box"
        style={selectionStyle}
        onClick={() => applyColor(updateSelectionStyle)}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
}
