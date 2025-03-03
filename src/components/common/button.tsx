interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps): React.ReactElement {
  return (
    <button
      className="w-20 h-10 border-[1.5px] rounded-3xl border-slate-200 mr-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
