
import React from "react";

const AffiliationsSection = () => {
  return (
    <section id="affiliations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Affiliations & Recognitions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are proud to be associated with leading industry bodies and hold
            prestigious recognitions.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-[500px] h-[500px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
            <p className="text-muted-foreground">
              Your square affiliation image goes here.
            </p>
            {/* Example of how to add your image:
              <img src="/path/to/your/image.jpg" alt="Our Affiliations" className="w-full h-full object-contain" /> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;