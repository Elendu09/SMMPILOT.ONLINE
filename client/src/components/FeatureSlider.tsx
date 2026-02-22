import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Settings, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Build Your Panel",
    description: "Complete infrastructure to create, manage, and scale your very own SMM business.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Not A Reseller",
    description: "We don't sell SMM services. We provide the elite software so YOU can sell them.",
  },
  {
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Total Automation",
    description: "Connect to your preferred API providers and watch your orders process automatically.",
  },
];

export function FeatureSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center" data-testid="feature-slider">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 pr-4 py-2"
            >
              <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 p-4 md:p-6 rounded-2xl bg-white border border-[#0000FF]/10 shadow-sm">
                <div className="p-2.5 md:p-3 bg-[#0000FF]/5 rounded-xl text-[#0000FF] border border-[#0000FF]/10">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 max-w-[260px] md:max-w-md mx-auto leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-3 md:mt-5">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-300 ease-out rounded-full ${
              index === selectedIndex
                ? "w-6 md:w-8 h-1.5 md:h-2 bg-[#0000FF]"
                : "w-1.5 md:w-2 h-1.5 md:h-2 bg-[#0000FF]/20 hover:bg-[#0000FF]/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`dot-slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
