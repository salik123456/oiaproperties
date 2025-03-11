"use client";
import Image from "next/image";

const developers = [
  { name: "TARAF", src: "/logos/logo-one.jpg", width: 200, height: 200 },
  { name: "IMKAN", src: "/logos/logo-one.jpg", width: 200, height: 200  },
  { name: "DEVELOPER 3", src: "/logos/logo-one.jpg", width: 200, height: 200  },
  { name: "RADIANT REAL ESTATE", src: "/logos/logo-one.jpg", width: 200, height: 200  },
  { name: "SAAS PROPERTIES", src: "/logos/logo-one.jpg", width: 200, height: 200  },
];

const FeaturedDevelopers = () => {
  return (
    <section className="relative py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/featured-bg.webp" // Replace with actual background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-primary/60"></div> {/* Dark Overlay */}
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          {/* Section Heading */}
          <h2 className="text-5xl  font-semibold text-dark flex items-center">
            <span className="w-1 h-[50px] bg-secondary mr-3"></span> {/* Gold Accent */}
            FEATURED DEVELOPERS
          </h2>

          {/* Developer Logos */}
          <div className="flex flex-wrap justify-between items-center gap-6 mt-12">
            {developers.map((dev, index) => (
              <div key={index} className="flex justify-center">
                <Image src={dev.src} alt={dev.name} width={dev.width} height={dev.height} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopers;
