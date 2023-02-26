import React from "react";
import "./spinner.css";
import imgLoader from "./portal-rick-and-morty.gif";

export default function Loader() {
  return (
    <div className="spinnerContainer">
      <img src={imgLoader} alt="PortalSpiner" />
    </div>
  );
}
