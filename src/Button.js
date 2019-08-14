import React from "react";
import styled from "styled-components";

const B = styled.button`
  height: 40px;
  width: ${({ width }) => width || "150px"};
  background: ${({ themeColor }) => `${themeColor.light}`};
  border: none;
  color: white;
  border-radius: 4px;
  transition: background 400ms;
  cursor: pointer;

  &:hover {
    background: ${({ themeColor }) => `${themeColor.dark}`};
  }
`;

const BRaised = styled.button`
  height: 40px;
  width: ${({ width }) => width || "150px"};
  background: ${({ themeColor }) => `${themeColor.light}`};
  border: none;
  color: white;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 400ms, background 400ms;
  cursor: pointer;

  &:hover {
    background: ${({ themeColor }) => `${themeColor.dark}`};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const BOutline = styled.button`
  height: 40px;
  width: ${({ width }) => width || "150px"};
  background: none;
  border: ${({ themeColor }) => `1px solid ${themeColor.light}`};
  color: ${({ themeColor }) => `${themeColor.light}`};
  border-radius: 4px;
  transition: border 400ms, background 400ms;
  cursor: pointer;

  &:hover {
    border: ${({ themeColor }) => `1px solid ${themeColor.dark}`};
    color: ${({ themeColor }) => `${themeColor.dark}`};
    background: #ddd;
  }
`;

const getColor = {
  primary: {
    light: "#33b1f5",
    dark: "#05a2f7"
  },
  secondary: {
    light: "#eb4034",
    dark: "#e80f00"
  }
};

function Button({ children, customStyles, outline, variant, raised }) {
  const color = getColor[variant || "primary"];

  if (raised) {
    return (
      <BRaised type="button" themeColor={color} {...customStyles}>
        {children.toUpperCase()}
      </BRaised>
    );
  }

  if (outline) {
    return (
      <BOutline type="button" themeColor={color} {...customStyles}>
        {children.toUpperCase()}
      </BOutline>
    );
  }

  return (
    <B type="button" themeColor={color} {...customStyles}>
      {children.toUpperCase()}
    </B>
  );
}

export default Button;
