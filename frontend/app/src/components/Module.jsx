import React from "react";

function Module({ children, classProp, keyProp }) {
  return <div className={`module-container ${classProp}`}>{children}</div>;
}

export default Module;
