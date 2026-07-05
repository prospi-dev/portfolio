const VARIANTS = {
  primary:
    "bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-[0_0_15px_rgba(192,38,211,0.5)] hover:shadow-[0_0_25px_rgba(192,38,211,0.8)] hover:-translate-y-1",
  secondary:
    "bg-white/5 backdrop-blur-md text-white font-medium border border-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
  ghost:
    "bg-gray-900 text-gray-400 font-medium border-b border-transparent hover:border-fuchsia-500 hover:text-fuchsia-400",
};

const Button = ({
  as: Component = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  return (
    <Component
      className={`rounded-xl py-3 transition-all duration-300 flex items-center justify-center gap-2 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
