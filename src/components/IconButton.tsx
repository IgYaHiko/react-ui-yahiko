import React from "react";

interface IconButtonProps {
  icon: React.ReactNode; // Accepts an icon (e.g., <FaSearch />, <img />)
  onClick?: () => void;
  styles?: React.CSSProperties;
  size?: number; // Optional size prop for flexibility
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, styles, size = 40 }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #007bff, #6a11cb)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        ...styles,
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {icon}
    </button>
  );
};

export default IconButton;
