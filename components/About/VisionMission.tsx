import React from "react";
import Icon from "@/components/ui/AppIcon";

interface VisionMissionItem {
  type: "vision" | "mission";
  title: string;
  description: string;
  icon: string;
}

interface VisionMissionProps {
  items: VisionMissionItem[];
}

const VisionMission: React.FC<VisionMissionProps> = ({ items }) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-textPrimary mb-4">
              Our Vision & Mission
            </h2>
            <p className="font-sourceSans text-xl text-textSecondary max-w-3xl mx-auto">
              Building economic bridges between Africa and the Indian Ocean for
              shared prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-primary/20"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    item.type === "vision" ? "bg-secondary/10" : "bg-accent/10"
                  }`}
                >
                  <Icon
                    name={item.icon as any}
                    size={32}
                    className={
                      item.type === "vision" ? "text-secondary" : "text-accent"
                    }
                  />
                </div>

                <h3 className="font-playfair font-bold text-2xl text-textPrimary mb-4">
                  {item.title}
                </h3>

                <p className="font-sourceSans text-lg text-textSecondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
