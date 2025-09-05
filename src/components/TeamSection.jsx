import React from "react";

// You can replace this with your actual team data
const teamMembers = [
  {
    name: "Pritam Ajit",
    designation: "Founder & CEO",
    imageUrl: "https://via.placeholder.com/200", // Increased placeholder size
  },
  {
    name: "Jane Doe",
    designation: "Head of Audit",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "John Smith",
    designation: "Taxation Expert",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "Emily White",
    designation: "Corporate Law Advisor",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "Michael Brown",
    designation: "Senior Accountant",
    imageUrl: "https://via.placeholder.com/200",
  },
];

const TeamSection = () => {
  return (
    <section id="our-team" className="pt-24 pb-20 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-ca-teal-light mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our firm is powered by a team of dedicated and experienced
            professionals.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="flex gap-12 overflow-x-auto pb-8 px-4 scrollbar-hide">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            // Increased card width slightly to accommodate larger image
            className="text-center flex-shrink-0 w-72" 
          >
            {/* Image container with decorative circle */}
            <div className="relative inline-block mb-4">
              {/* UPDATED: Increased decorative circle size and made it truly background */}
              {/* This circle is now a sibling to the image, letting it act as a true background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white/10 rounded-full"></div>
              <img
                src={member.imageUrl}
                alt={`Photo of ${member.name}`}
                // UPDATED: Increased image dimensions
                className="relative z-10 w-48 h-48 rounded-full object-cover border-4 border-white"
              />
            </div>
            {/* Text directly below the image */}
            <h3 className="text-xl font-semibold text-white mt-2">
              {member.name}
            </h3>
            <p className="text-md text-ca-teal-light">{member.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;