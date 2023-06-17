import React from "react";

const Button = ({ title, img, type }) => {
  let imgStyle = {};
  let buttonStyle = {};

  if (title === "Viverra orci sagittis") {
    buttonStyle = {
      border: "1px solid #181F1B",
      borderRadius: "10px",
      padding: "5px 15px",
      textAlign: "center",
      color: "#181F1B",
      cursor: "pointer",
    };
  } else if (title === "Get a demo") {
    buttonStyle = {
      backgroundColor: "#58BF73",
      display: "flex",
      borderRadius: "10px",
      textAlign: "center",
      color: "#FFFFFF",
      cursor: "pointer",
      padding: "8px 30px",
      marginLeft: "20px",
    };
  } else if (title === "Get Started") {
    buttonStyle = {
      backgroundColor: "blue",
      background: "#58BF73",
      borderRadius: "10px",
      padding: "5px 15px",
      textAlign: "center",
      color: "#FFFFFF",
      cursor: "pointer",

      width: "8rem",
    };
  } else if (title === "Login") {
    buttonStyle = {
      border: "1px solid #181F1B",
      borderRadius: "10px",
      padding: "5px 15px",
      textAlign: "center",
      color: "#181F1B",
      cursor: "pointer",
      width: "8rem",
    };
  } else if (title === "Try Out Now!" && type === "two") {
    buttonStyle = {
      backgroundColor: "#58BF73",
      background: "#58BF73",
      borderRadius: "10px",
      padding: "5px 15px",
      textAlign: "center",
      color: "#FFFFFF",
      cursor: "pointer",
      width: "8rem",
      marginTop: "30px",
    };
  } else if (title === "Try Out Now!") {
    buttonStyle = {
      backgroundColor: "#58BF73",
      background: "#58BF73",
      borderRadius: "10px",
      padding: "5px 15px",
      textAlign: "center",
      color: "#FFFFFF",
      cursor: "pointer",
      width: "8rem",
    };
  } else if (title === "Apply") {
    buttonStyle = {
      backgroundColor: "#58BF73",
      background: "#58BF73",
      borderRadius: "10px",
      padding: "5px 15px",
      textAlign: "center",
      color: "#FFFFFF",
      cursor: "pointer",
      width: "8rem",
    };
  } else {
    return;
  }

  if (img) {
    imgStyle = { height: "24px", width: "24px", marginRight: "10px" };
  }

  return (
    <div style={buttonStyle}>
      {img && <img style={imgStyle} src={img} alt="" />}
      {title}
    </div>
  );
};

export default Button;
