import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className='ml-8'>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#courses" className="hover:underline">Courses in Offer</a></li>
            <li><a href="#demo" className="hover:underline">Demo Classes</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <a href='<p>vidyam.classes01@gmail.com</p>'>
          <p>vidyam.classes01@gmail.com</p>
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-2">Socials</h3>
          <a href="##" className="hover:underline"><img className='rounded-full size-10 m-2 ' src='https://img.freepik.com/free-psd/instagram-application-logo_23-2151544096.jpg?size=626&ext=jpg'></img></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
