import React from "react";

interface IconProps {
  icon: JSX.Element | React.ReactElement;
}

export const Icon = ({ icon }: IconProps) => {
  const StyledIcon = () =>
    React.cloneElement(icon, {
      className: `${
        icon.props.className ? icon.props.className : ""
      } fill-gray-400 hover:fill-blue-500 transition-colors w-5 h-5 cursor-pointer`,
    });

  return <StyledIcon />;
};
