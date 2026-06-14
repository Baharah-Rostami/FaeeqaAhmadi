import FadeIn from "../Components/Animations/FadeIn";
export default function Hero({
  badge,
  title,
  subtitle,
  image,
}) {
  return (
    <section className="relative overflow-hidden bg-[#F7F3E9] py-24">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7A9D7E]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8B6B4A]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <FadeIn>
            <div>
              {badge && (
                <span className="inline-block px-4 py-2 rounded-full bg-[#7A9D7E]/10 text-[#7A9D7E] text-sm font-medium mb-6">
                  {badge}
                </span>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A3226] leading-tight mb-6">
                {title}
              </h1>

              <p className="text-lg text-[#6B6256] leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>
          </FadeIn>

          {/* Image */}
          {image && (
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#7A9D7E]/10 rounded-3xl blur-xl"></div>

                <img
                  src={image}
                  alt={title}
                  className="relative rounded-3xl shadow-xl w-full h-[450px] object-cover"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}