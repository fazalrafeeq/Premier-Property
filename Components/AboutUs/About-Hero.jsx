export default function AboutHero() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200">
          Expert care for your premium properties.
        </p>
      </div>
    </section>
  );
}
