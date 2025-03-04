interface ButtonProps {
  label: string;
  onClick: () => void;
}

function TransparentButton({
  label,
  onClick,
}: ButtonProps): React.ReactElement {
  return (
    <button
      className="w-20 h-10 border-[1.5px] rounded-3xl border-slate-200 mr-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function BlueButton({ label, onClick }: ButtonProps): React.ReactElement {
  return (
    <button
      className="w-24 h-12 rounded-3xl mr-2 bg-sky-700 text-teal-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function GrayButton({ label, onClick }: ButtonProps): React.ReactElement {
  return (
    <button
      className="w-24 h-12 rounded-3xl mr-2 bg-gray-500 text-stone-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export { TransparentButton, BlueButton, GrayButton };
