import TreatmentCard from "@/components/TreatmentCard";

export default function CategorySection({
  title,
  subtitle,
  items = [],
  theme,
  defaultImage,
}) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19]">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <TreatmentCard
              key={item.slug}
              title={item.name}
              description={item.description}
              href={item.slug}
              image={item.image || defaultImage}
              badge={item.badge}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
