export function Button({ children, colors, onClick }) {
  return (
    <button
      className={`rounded ${colors} text-sm py-2 px-4 capitalize`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
