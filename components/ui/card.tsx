import "@/components/ui/button";
import * as React from "react";

/**
 * @description A reusable card component with customizable backgrounds and borders,
 * designed to fit the premium dark mode aesthetic.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-[#0F172A] border border-gray-800/50 shadow-xl transition duration-300 hover:border-cyan-600/50 ${className}`}
    {...props}
  />
));

Card.displayName = "Card";