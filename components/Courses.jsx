import React from 'react';

const courses = [
  {
    title: "Class-11 Physics",
    description: "Class-11 Physics till Gravitation. A total of 7 chapters covered. 100+ Questions in each chapter. 110+ hours of Live class + Doubt class and problem solving class.",
    image: "https://static.wixstatic.com/media/e9843a_cbf021b8cc1f4225be02ddd748639089~mv2.png/v1/crop/x_106,y_0,w_573,h_560/fill/w_338,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mechanics-of-style-category_tcm11-285736.png"
  },
  {
    title: "Class 11 Chemistry",
    description: "Class 11 Chemistry till Chemical Bonding and Molecular Structure. A total of 4 chapters covered. 100+ Questions in each chapter. 50+ hours of Live class + Doubt and problem solving classes.",
    image: "https://static.wixstatic.com/media/e9843a_4a7f361e6ae440a6988c92df8ba6c67b~mv2.png/v1/fill/w_338,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/000-Best-Atom-Packages.png"
  },
  {
    title: "Class 12 Chemistry",
    description: "Solid States Covered in this course. 100+ Questions. 10+ hours of live class + Doubt and problem solving classes.",
    image: "https://static.wixstatic.com/media/e9843a_07751cdd8e6e43148ee685c610794d18~mv2.jpg/v1/crop/x_22,y_6,w_229,h_225/fill/w_321,h_313,al_c,lg_1,q_80,enc_auto/1574870900137.jpg"
  }
];

const Courses = () => {
  return (
    <section className="my-12 text-center">
      <h2 className="text-4xl font-bold underline text-yellow-500 mb-8">Courses</h2>
      <div className='text-2xl m-4'>
      We Launch Short programs every month. They comprise of 1-10 chapters.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-56 object-cover" src={course.image} alt={course.title} />
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">{course.title}</h3>
              <p className="text-gray-700 text-base">{course.description}</p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3  py-2 px-4 rounded float-right">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
