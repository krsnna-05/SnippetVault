interface FeatureRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureRow = ({ icon, title, description }: FeatureRowProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex size-7 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureRow;
