import React, { ReactNode, useEffect, useState } from "react";

type visualizeProps = {
  showAlert?: boolean;
  children?: ReactNode;
  componentName?: string;
  width?: string;
  color?: string;
  border?: "dashed" | "solid";
  invert?: boolean;
  validPorts?: string[];
};

const VisualizeComponent = ({
  border = "solid",
  showAlert = false,
  children,
  width = "10px",
  color = "red",
  invert = false,
  validPorts = ["3000", "3001", "9001", "9000", "8000", "8888"],
}: visualizeProps) => {
  const [showToast, setShowToast] = useState(false);
  const devMode = validPorts.includes(window.location.port);

  if (!devMode) {
    return <>{children}</>;
  }

  const toastAlert = () => {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "20px 55px 20px 20px",
          backgroundColor: invert ? "white" : "#090909",
          color: invert ? "rgb(240 3.7% 15.9%)" : "#FFFFFF",
          borderRadius: "8px",
          border: "1px solid rgb(240 3.7% 15.9%)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 9999,
        }}
      >
        Component is mounted!
        <button
          style={{
            position: "absolute",
            top: "21px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 9999,
            color: invert ? "#090909" : "rgb(240 3.7% 15.9%)",
          }}
          onClick={() => setShowToast(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            version="1.1"
            viewBox="0 0 26 26"
            xmlSpace="preserve"
          >
            <path
              fill={invert ? "rgb(240 3.7% 15.9%)" : "#fff"}
              d="M21.125 0H4.875A4.874 4.874 0 000 4.875v16.25A4.874 4.874 0 004.875 26h16.25A4.874 4.874 0 0026 21.125V4.875A4.874 4.874 0 0021.125 0zM18.78 17.394l-1.388 1.387a.654.654 0 01-.924 0L13 15.313 9.533 18.78a.653.653 0 01-.925-.002L7.22 17.394a.66.66 0 010-.926l3.468-3.467-3.467-3.467a.657.657 0 010-.925l1.388-1.388a.651.651 0 01.925 0L13 10.689l3.468-3.468a.65.65 0 01.924 0l1.388 1.386a.66.66 0 01.001.927l-3.468 3.467 3.468 3.467a.66.66 0 01-.001.926z"
            ></path>
          </svg>
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (showAlert) {
      setShowToast(true);
    }
  }, [showAlert]);

  return (
    <div style={{ outline: `${width} ${border} ${color}` }}>
      {children}
      {showAlert && showToast && toastAlert()}
    </div>
  );
};

export default VisualizeComponent;
