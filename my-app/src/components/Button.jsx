const Button = ({
  text,
  onClick,
  className = "",
  textSize = "[2vh]",
  spanHeight = "[3vh]",
  width = "auto",
  padding = "0.5rem 2rem" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`hover-lift-btn ${className}`}
      style={{ 
        width: width,
        padding: padding 
      }}
    >
      <span 
        className="hover-text-wrapper" 
        style={{ height: spanHeight, lineHeight: spanHeight }}
        aria-hidden="true"
      >
        <span className="top" style={{ fontSize: textSize }}>{text}
        <span className="underline"></span>
        </span>
        <span className="bottom" style={{ fontSize: textSize }}>{text}</span>
      </span>
    </button>
  );
};

export default Button;