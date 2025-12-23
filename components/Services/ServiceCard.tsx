import React from "react";
import Icon from "@/components/ui/AppIcon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  color: "blue" | "green" | "red";
}

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-secondary",
    border: "border-secondary/20",
  },
  green: {
    bg: "bg-emerald-50",
    icon: "text-accent",
    border: "border-accent/20",
  },
  red: {
    bg: "bg-red-50",
    icon: "text-primary",
    border: "border-primary/20",
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  color,
}) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1`}
    >
      <div
        className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} bg-white rounded-xl mb-6 shadow-sm`}
      >
        <Icon name={icon as any} size={32} />
      </div>
      <h3 className="font-playfair font-bold text-2xl text-textPrimary mb-4">
        {title}
      </h3>
      <p className="font-sourceSans text-base text-textSecondary mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Icon
              name="CheckCircleIcon"
              size={20}
              className={`${colors.icon} flex-shrink-0 mt-0.5`}
            />
            <span className="font-sourceSans text-sm text-textPrimary">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
