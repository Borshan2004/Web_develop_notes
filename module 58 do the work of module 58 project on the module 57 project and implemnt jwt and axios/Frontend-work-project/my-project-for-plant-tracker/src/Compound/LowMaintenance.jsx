import React from 'react';

const LowMaintenance = () => {
  const legends = [
    { name: "Snake Plant", tag: "The Survivor", desc: "Thrives on neglect and low light.", img: "https://i.ibb.co.com/k6rFXQvf/a-AI002-H46.webp" },
    { name: "Pothos", tag: "The Trailer", desc: "Fast-growing and incredibly resilient.", img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=200" },
    { name: "ZZ Plant", tag: "The Indestructible", desc: "Needs water only once a month.", img: "https://i.ibb.co.com/b9yT6ZC/images.webp" }
  ];

  return (
    <section className="my-14 py-20 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-950">Low-Maintenance Legends</h2>
          <p className="text-emerald-700/70 mt-2 font-medium">Perfect for beginners or busy developers.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {legends.map((plant, idx) => (
            <div key={idx} className="flex bg-white rounded-3xl overflow-hidden shadow-sm border border-emerald-100 hover:scale-[1.02] transition-transform">
              <img src={plant.img} alt={plant.name} className="w-1/3 object-cover" />
              <div className="p-5 w-2/3">
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-600">{plant.tag}</span>
                <h3 className="text-lg font-bold text-emerald-900">{plant.name}</h3>
                <p className="text-xs text-gray-500 mt-2">{plant.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LowMaintenance;