type Props = {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    textIcon?: string,
    color: string;
    label: string,
}

const SkillEntry = ({ textIcon, color, icon: Icon, label }: Props) => {
    return (

        <div className="flex flex-row gap-5">
            {Icon && <Icon className={`text-5xl ${color}`} />}
            {textIcon && <p className={`text-lg mt-1 tracking-tighter ${color}`}>{textIcon}</p>}
            <p className="text-xs mt-3 ">{label}</p>
        </div>

    )
}

export default SkillEntry;