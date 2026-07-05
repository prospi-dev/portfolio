import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const TimelineCard = ({
    icon: Icon,
    iconColor,
    borderColor,
    title,
    titleClassName = "text-cyan-300 font-semibold text-lg mb-1",
    subtitle,
    subtitleClassName = "text-gray-300 font-medium",
    summary,
    responsibilities,
    techStack,
    techBadgeClassName = "text-cyan-300",
    techBorderClassName = "border-cyan-400/30",
    accentColor,
    location,
    date,
    fullWidth = false,
}) => (
    <div
        className={`bg-white/10 backdrop-blur-sm border ${borderColor} rounded-xl p-6 text-left hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg w-xs ${fullWidth ? "lg:w-full" : "lg:w-lg"}`}
    >
        <div className="flex items-start gap-3 mb-3">
            <Icon className={`${iconColor} text-xl mt-1 flex-shrink-0`} />
            <div className="flex-1">
                <h3 className={titleClassName}>{title}</h3>
                {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
                {summary && <p className="text-gray-300 mb-3 mt-1">{summary}</p>}

                {responsibilities && (
                    <div className="bg-black/20 rounded-lg p-4 mb-4 mt-3">
                        <h4 className="text-white font-medium mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-2 text-gray-300">
                            {responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className={`${accentColor} text-xs mt-2`}>●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className={`px-3 py-1 bg-black/20 ${techBadgeClassName} text-xs font-medium rounded-full border ${techBorderClassName}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
                <FaMapMarkerAlt className={accentColor} />
                <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
                <FaRegCalendarAlt className={accentColor} />
                <span>{date}</span>
            </div>
        </div>
    </div>
);

export default TimelineCard;
