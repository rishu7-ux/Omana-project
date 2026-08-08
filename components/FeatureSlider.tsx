"use client";

const features = [
  "Dholera Logistic Plot",
  "Residential Projects",
  "Industrial Plots",
  "Commercial Spaces",
  "Premium Villas",
  "RERA Approved",
  "100% Secure Investment",
  "Premium Township",
];

export default function FeatureSlider() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-[#061A40] via-[#0A3D91] via-[#1565C0] to-[#42A5F5] py-5 shadow-[0_8px_30px_rgba(8,26,58,0.35)]">
      <div className="animate-marquee flex w-max items-center">

        {[...features, ...features].map((item, index) => (
          <div
            key={index}
            className="mx-8 flex shrink-0 items-center gap-4"
          >
            {/* Feature Text */}
            <span className="text-sm font-semibold uppercase tracking-[2px] text-white lg:text-base">
              {item}
            </span>

            {/* Blue Circle */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#1565C0] text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-110">
              ✓
            </div>

            {/* White Diamond */}
            <div className="h-2.5 w-2.5 rotate-45 rounded-sm bg-white/80"></div>
          </div>
        ))}

      </div>
    </section>
  );
}