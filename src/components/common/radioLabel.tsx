interface RadioLabelProps {
  label: string;
  name: string;
  defaultChecked?: boolean;
  onClick?: () => void;
}

function RadioLabel({
  label,
  name,
  defaultChecked,
  onClick,
}: RadioLabelProps): React.ReactElement {
  return (
    <label className={"label cursor-pointer"}>
      <input
        type="radio"
        name={name}
        className="radio radio-primary"
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      <span className="label-text">{label}</span>
    </label>
  );
}

export default RadioLabel;
