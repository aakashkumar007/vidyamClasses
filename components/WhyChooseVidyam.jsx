import React from 'react';

const WhyChooseVidyam = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Why Choose Vidyam?</h2>
      <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Vidyam Benefits</h3>
          <ul className="list-disc pl-4">
            <li className="text-lg mb-2">Personal Mentorship</li>
            <li className="text-lg mb-2">Highly Qualified Faculty</li>
            <li className="text-lg mb-2">Study Material</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Academic Support</h3>
          <ul className="list-disc pl-4">
            <li className="text-lg mb-2">Notes of Live Class will be provided</li>
            <li className="text-lg mb-2">Proper Doubt Clearing Sessions</li>
            <li className="text-lg mb-2">100+ Questions in each Chapter</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVidyam;
