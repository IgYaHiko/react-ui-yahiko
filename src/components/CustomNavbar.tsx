import React, { useState } from "react";

interface CustomNavbarProps {
  img?: string;
  atags?: string[];
  onClicksAtags?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  styles?: React.CSSProperties;
  buttonStyles?: React.CSSProperties[];
  buttonNames?: string[];
  onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({
  img,
  atags = [],
  onClicksAtags,
  styles,
  buttonStyles = [],
  buttonNames = [],
  onClickBtn,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        ...styles,
      }}
    >
      {/* Logo Section */}
      <div>
        <img
          style={{ width: "48px", height: "48px", objectFit: "contain" }}
          src={img || "default-image-url"}
          alt="Logo"
        />
      </div>

      {/* Desktop Nav Links */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {atags.map((item, index) => (
          <a
            onClick={onClicksAtags}
            href={`#${item.toLowerCase()}`}
            key={index}
            style={{
              color: "#fff",
              textDecoration: "none",
              margin: "0 16px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#bbb")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="32"
            height="32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Slider Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "8px",
              width: "75%",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <img
                style={{ width: "48px", height: "48px", objectFit: "contain" }}
                src={img || "default-image-url"}
                alt="Logo"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="32"
                  height="32"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {atags.map((item, index) => (
                <a
                  onClick={onClicksAtags}
                  href={`#${item.toLowerCase()}`}
                  key={index}
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    marginBottom: "16px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                >
                  {item}
                </a>
              ))}

              {/* Mobile Buttons */}
              {buttonNames.map((name, index) => (
                <button
                  onClick={onClickBtn}
                  key={index}
                  style={{
                    backgroundColor: "white",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid black",
                    marginBottom: "16px",
                    cursor: "pointer",
                    ...(buttonStyles[index] || buttonStyles[0]),
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomNavbar;
