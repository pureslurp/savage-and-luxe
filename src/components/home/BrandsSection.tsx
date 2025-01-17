//src/components/home/BrandsSection.tsx
export default function BrandsSection() {
    const brands = [
      'BORCELLE',
      'LIBERIA & CO.',
      'WARDIERE INC.',
      'INGOUDE',
      'SHODWE',
      'AROWWAI INDUSTRIES'
    ];
  
    return (
      <section className="py-16">
        <h2 className="text-center text-2xl mb-12">BRANDS</h2>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-8">
            {brands.map((brand) => (
              <div key={brand} className="text-xl font-bold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }