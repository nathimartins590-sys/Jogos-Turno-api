import "./style.css";

export function Button({
  children,
  type = "button",
  disabled = false,
}) {
  return (
    <button type={type} disabled={disabled} className="btn">
      {children}
    </button>
  );
}