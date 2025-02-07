import * as React from 'react';


type PropsType = {
  children: React.ReactNode;
  onClick: () => void;
  styles?: React.CSSProperties;
};

const YahikoButton: React.FC<PropsType> = ({ children, onClick,styles }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        background: "bg-[#191919]",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        ...styles,
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
};

export { YahikoButton };
