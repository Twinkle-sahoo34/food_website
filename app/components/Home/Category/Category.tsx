import React from 'react'

const categories = [
{ "name": "pizza" },
{ "name": "Breakfast" },
{ "name": "Japanese" },
  { "name": "pasta" },
  { "name": "Halal" },
  { "name": "salad" },
  { "name": "Dessert" },
  { "name": "Labonese" },
  { "name": "American" },
  { "name": "sushi" },
  { "name": "Thai" },
  { "name": "Greek" },
  { "name": "Vegetarian" },
  { "name": "Italian" },
  { "name": "Mexican" },
  { "name": "sandwich" },
  { "name": "noodles" },
  { "name": "tacos" },
  { "name": "fried rice" },
  { "name": "curry" }
];const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold ">
        Popular categories by food
      </h1>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, i) => {
            return (
              <span
               data-aos="zoom-in" 
               data-aos-anchor-placement="top-center" 
               data-aos-delay={i*70}
                key={i}
                className="px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600
                hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white
                text-gray-900 font-semibold text-lg"
              >
                {category.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
