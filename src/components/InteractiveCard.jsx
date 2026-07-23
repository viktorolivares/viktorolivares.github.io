import { useMemo, useState } from "react";

const InteractiveCard = ({
  as = "div",
  className = "",
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const Tag = as;
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
  });

  const handlers = useMemo(
    () => ({
      onMouseMove: (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 8;
        const rotateX = (0.5 - y / rect.height) * 8;

        setStyle({
          transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`,
        });

        onMouseMove?.(event);
      },
      onMouseLeave: (event) => {
        setStyle({
          transform:
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
        });

        onMouseLeave?.(event);
      },
    }),
    [onMouseLeave, onMouseMove],
  );

  return (
    <Tag
      {...props}
      {...handlers}
      className={`interactive-card relative overflow-hidden transition-transform duration-300 ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default InteractiveCard;
