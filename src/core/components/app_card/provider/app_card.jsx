import React, {createContext} from "react";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import { Provider } from "./card_context";
import useHover from "../../../hooks/useHover";

const AppCard = ({ 
  children, 
  width = "100%",
  height = "100%",
  backgroundImageSrc = undefined,
  aspectRatio = "5/2",
  borderColor = "1px solid #ccc",
  borderRadius = "10px",
  ...props 
}) => {
  
  const [isHovered, handlers] = useHover();  
  
  return (
    <Provider value={{
      isHovered, 
    }}
    >
    <article
      {...props}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width,
        height,
        aspectRatio,
        borderColor,
        borderRadius,
        borderStyle: "solid",
        ...props.style,
      }} 
    >
    {
      backgroundImageSrc &&
        <img 
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
          src= {backgroundImageSrc}
          alt= "imagen de una peli"
        />
        }

      {children}
    </article>
    </Provider>
  );
};

AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

export default AppCard;