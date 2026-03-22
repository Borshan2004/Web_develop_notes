import React from 'react';
import { Droplets, Sun, Sprout } from 'lucide-react'; // Optional: Use Lucide icons or SVGs

const RecoveryKit = () => {
  const tips = [
    {
      title: "Overwatering",
      desc: "The #1 plant killer. Learn the 'finger test' before you pour.",
      icon: <Droplets className="text-emerald-600 w-8 h-8" />
    },
    {
      title: "Light Starvation",
      desc: "Moving your plant just two feet can change its life.",
      icon: <Sun className="text-amber-500 w-8 h-8" />
    },
    {
      title: "Neglecting Drainage",
      desc: "Roots need to breathe. Always check your pot's bottom.",
      icon: <Sprout className="text-emerald-700 w-8 h-8" />
    }
  ];

  return (
    <section className="my-14 py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-950 mb-2">The "Black Thumb" Recovery Kit</h2>
        <p className="text-gray-500">Common mistakes that might be hurting your plants.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <div key={index} className="p-8 rounded-3xl border border-emerald-50 hover:bg-emerald-50 transition-colors duration-300 group">
            <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              {tip.icon}
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">{tip.title}</h3>
            <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecoveryKit;