import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

const InputWithIcon = ({
  id,
  icon,
  placeholder,
  type,
  iconOnRight = false,
  onRightIconClick,
  rightIconLabel,
  onChange,
  value,
}: {
  id: string;
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  iconOnRight?: boolean;
  onRightIconClick?: () => void;
  rightIconLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}) => {
  return (
    <div className="relative">
      {!iconOnRight && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        className={cn(
          "h-12 border-border bg-background text-base",
          iconOnRight ? "pr-11" : "pl-10",
        )}
        onChange={(e) => onChange && onChange(e)}
      />
      {iconOnRight &&
        (onRightIconClick ? (
          <button
            type="button"
            onClick={onRightIconClick}
            aria-label={rightIconLabel ?? "Toggle input visibility"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {icon}
          </button>
        ) : (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        ))}
    </div>
  );
};

export default InputWithIcon;
