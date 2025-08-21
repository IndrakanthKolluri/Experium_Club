export default function Stats({ stats }) {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-emerald-700">
          Experience in Numbers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="bg-white p-8 rounded-xl border border-emerald-200 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl group-hover:scale-105">
                <div className="text-emerald-600 mb-4 flex justify-center text-4xl">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 group-hover:text-yellow-600 transition-colors font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
