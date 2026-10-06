import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Men",
    image: "/categories/men.jpg",
  },
  {
    title: "Women",
    image: "/categories/women.jpg",
  },
  {
    title: "Shoes",
    image: "/categories/shoes.jpg",
  },
  {
    title: "Accessories",
    image: "/categories/accessories.jpg",
  },
  {
    title: "Beauty",
    image: "/categories/beauty.jpg",
  },
  {
    title: "Kids",
    image: "/categories/kids.jpg",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="w-full bg-white px-6 py-16 lg:px-10"
    >
      <div className="mx-auto max-w-350">

        {/* Heading */}
        <div className="mb-10 text-center">

          <p className="mb-2 text-sm font-bold tracking-[4px] text-pink-500">
            EXPLORE CATEGORIES
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Shop By Category
          </h2>

        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">

          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;