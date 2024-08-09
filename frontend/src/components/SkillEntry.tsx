import { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  textIcon?: string;
  color: string;
  label: string;
  className?: string;
};

const SkillEntry = ({
  textIcon,
  color,
  icon: Icon,
  label,
  className,
}: Props) => {
  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      <div className="flex items-center justify-end">
        {Icon && <Icon className={`text-5xl ${color}`} />}
        {textIcon && (
          <p className={`text-5xl tracking-tighter ${color}`}>{textIcon}</p>
        )}
      </div>
      <div className="flex items-end">
        <p className="text-xs">{label}</p>
      </div>
    </div>
  );
};

export default SkillEntry;
