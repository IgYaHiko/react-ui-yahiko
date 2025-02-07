import * as React from 'react';

interface LoadingButtonProps {
  onClick: () => void;
  isLoading: boolean;
  text: string;
  loadingText?: string;
  styles?: React.CSSProperties;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  onClick,
  isLoading,
  text,
  loadingText = 'Loading...',
  styles,
}) => {
  const buttonStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    color: '#fff',
    backgroundColor: isLoading ? '#d3d3d3' : '#007bff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ...styles,
  };

  const spinnerStyles: React.CSSProperties = {
    animation: 'spin 1s linear infinite',
    height: '20px',
    width: '20px',
    color: 'white',
  };

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  return (
    <button onClick={onClick} disabled={isLoading} style={buttonStyles}>
      {isLoading ? (
        <div style={containerStyles}>
          <svg
            style={spinnerStyles}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
              style={{ opacity: 0.25 }}
            ></circle>
            <path
              fill="currentColor"
              d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
              style={{ opacity: 0.75 }}
            ></path>
          </svg>
          <span>{loadingText}</span>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export {LoadingButton};
