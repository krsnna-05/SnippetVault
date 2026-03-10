interface FieldLabelProps {
  htmlFor: string;
  label: string;
}

const FieldLabel = ({ htmlFor, label }: FieldLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-card-foreground"
    >
      {label}
    </label>
  );
};

export default FieldLabel;
