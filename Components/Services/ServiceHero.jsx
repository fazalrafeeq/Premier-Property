export default function ServicesHero() {
  return (
    <section className="relative h-[63vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover brightness-50"
        style={{ backgroundImage: "url('/image/about-hero.png')" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/70" />

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-xl md:text-3xl  font-bold text-white">Services</h1>
        <p className="mt-2 md:mt-4 text-xm md:text-2xl text-gray-200">
          Expert care for your premium properties.
        </p>
      </div>
    </section>
  );
}
