import "./HeaderElement.styles.css";

export const HeaderElement = ({
  path,
  secondPath,
  title,
  space,
  customHeight,
  customWidth,
  customClass,
  img,
}) => {
  return (
    <div
      className={`header-element ${customClass ? customClass : ""}`}
      style={{
        height: `${customHeight ? `${customHeight}rem` : ""}`,
        width: `${customWidth ? `${customWidth}rem` : ""}`,
      }}
    >
      {img ? (
        <img src={img} alt="user-profile" />
      ) : (
        <svg>
          <path d={path} />
          <path d={secondPath} />
        </svg>
      )}

      <div
        className="tool-tip"
        style={{ marginLeft: `${space ? space : 0}rem` }}
      >
        {title}
      </div>
    </div>
  );
};
