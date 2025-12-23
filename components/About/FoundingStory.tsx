import React from "react";
import AppImage from "@/components/ui/AppImage";

interface FoundingStoryProps {
  story: {
    year: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  };
}

const FoundingStory: React.FC<FoundingStoryProps> = ({ story }) => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-card">
                <AppImage
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              {/* <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="font-montserrat font-semibold text-primary text-sm">
                  Fondée en {story.year}
                </span>
              </div> */}

              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-textPrimary mb-6">
                {story.title}
              </h2>

              <div className="space-y-4 font-sourceSans text-lg text-textSecondary leading-relaxed">
                {story.description.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;
