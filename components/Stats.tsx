"use client";

import CountUp from "react-countup";

const stats = [
  { icon: "⭐", end: 1200, suffix: "+", label: "Satisfied Clients" },
  { icon: "🏢", end: 1000, suffix: "+", label: "Apartments Sold" },
  { icon: "🏆", end: 5, suffix: "+", label: "Awards Won" },
  { icon: "🔑", end: 900, suffix: "+", label: "Project Handover" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-xl bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h2 className="mb-2 text-4xl font-extrabold text-[#003BB0]">
                <CountUp
                  end={item.end}
                  duration={3}
                  suffix={item.suffix}
                />
              </h2>

              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}