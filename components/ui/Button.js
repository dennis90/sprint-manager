import React from "react";

const Button = ({
  primary = true,
  children,
  tagName = "span",
  className = "",
  ...props
}) => {
  const extraClasses = primary
    ? "bg-purple-600 text-white hover:bg-purple-700"
    : "border border-purple-600 text-purple-600 font hover:text-purple-800 hover:border-purple-800";

  return React.createElement(
    tagName,
    {
      ...props,
      className: `font-medium rounded-md py-1.5 px-3 cursor-pointer ${extraClasses} ${className}`,
    },
    children
  );
};

export default Button;
