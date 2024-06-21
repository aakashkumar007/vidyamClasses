import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const programsClass11 = [
  {
    title: "Class-11 Physics",
    description: "Class-11 Physics till Gravitation. A total of 7 chapters covered. 100+ Questions in each chapter. 110+ hours of Live class + Doubt class and problem solving class. Full Preparation of JEE and NEET",
    image: "https://static.wixstatic.com/media/e9843a_cbf021b8cc1f4225be02ddd748639089~mv2.png/v1/crop/x_106,y_0,w_573,h_560/fill/w_338,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mechanics-of-style-category_tcm11-285736.png",
  },
  {
    title: "Class-11 Chemistry",
    description: "Class 11 Chemistry till Chemical Bonding and Molecular Structure. A total of 4 chapters covered. 100+ Questions in each chapter. 50+ hours of Live class + Doubt and problem solving classes.",
    image: "https://static.wixstatic.com/media/e9843a_4a7f361e6ae440a6988c92df8ba6c67b~mv2.png/v1/fill/w_338,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/000-Best-Atom-Packages.png",
  }
];

const programsClass12 = [
  {
    title: "Class-12 Chemistry",
    description: "Solid States Covered in this course. 100+ Questions. 10+ hours of live class + Doubt and problem solving classes.",
    image: "https://static.wixstatic.com/media/e9843a_07751cdd8e6e43148ee685c610794d18~mv2.jpg/v1/crop/x_22,y_6,w_229,h_225/fill/w_321,h_313,al_c,lg_1,q_80,enc_auto/1574870900137.jpg",
  },
  {
    title: "Class 12 Relations & Functions",
    description: "Relations & Functions covered in this course. 100+ Questions to practice. 8+ Hours of Live class + Doubt and Problem Solving class.",
    image: "https://static.wixstatic.com/media/e9843a_8b8f6f3ad4e14f27931ac098099108df~mv2.jpeg/v1/fill/w_306,h_580,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e9843a_8b8f6f3ad4e14f27931ac098099108df~mv2.jpeg",
  }
];

const Programs = () => {
  return (
    <>
      <h1 className='text-4xl font-bold text-yellow-400 text-center underline mt-10'>Programs</h1>
      <h2 className='text-2xl font-bold text-purple-950 mt-10 text-center'>More Programs Coming Shortly</h2>

      <div className="mt-16">
        <h1 className='text-yellow-400 text-3xl underline font-bold text-center p-8'>CLASS - 11</h1>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {programsClass11.map((program, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '450px', width: '100%' }}>
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                </div>
                <div className="text-right">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img className="w-full h-full object-cover" src={program.image} alt={program.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h1 className='text-yellow-400 text-3xl underline font-bold text-center p-8'>CLASS - 12</h1>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {programsClass12.map((program, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '450px', width: '100%' }}>
            <div className="flex flex-col md:flex-row-reverse h-full">
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                </div>
                <div className="text-right">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img className="w-full h-full object-cover" src={program.image} alt={program.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Section with Image and Form */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('https://static.wixstatic.com/media/5afe60462baf41e79586f3fdaf78d664.jpg/v1/fill/w_960,h_963,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5afe60462baf41e79586f3fdaf78d664.jpg')` }}>
        <div className="container mx-auto px-6 py-16 flex items-center justify-center">
          <div className="md:w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us for Admission</h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" id="phone" type="text" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" id="message" placeholder="Your Message" rows="4"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-purple-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
