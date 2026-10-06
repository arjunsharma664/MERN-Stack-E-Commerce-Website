function CategoryCard({ title, image }) {
  return (
    <div className="group cursor-pointer">

      <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition duration-300 hover:shadow-lg">

        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <h3 className="mt-4 text-center text-lg font-bold text-gray-800 transition group-hover:text-pink-500">
        {title}
      </h3>

    </div>
  );
}

export default CategoryCard;