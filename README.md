# Vidyam Educational Platform

## Overview

Vidyam is an educational platform dedicated to providing comprehensive learning resources for students preparing for competitive exams like JEE and NEET. This README provides an overview of the project structure, key components, and how to navigate through different sections.

## Project Structure

The project is structured as follows:

vidyam-educational-platform/
│
├── public/
│ ├── index.html
│ └── ...other public assets
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Courses.jsx
│ │ ├── WhyChooseVidyam.jsx
│ │ ├── ImageSlider.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Programs.jsx
│ ├── App.js
│ ├── index.js
│ └── styles.css (or styles using Tailwind CSS)
│
├── README.md
└── package.json


## Components Overview

### `Header.jsx`

The header component includes navigation links and a responsive mobile menu toggle. It uses React Router for navigation and ensures proper active link highlighting.

### `Courses.jsx`

Displays courses offered by Vidyam, including details like course descriptions, images, and a "Know More" button for each course.

### `WhyChooseVidyam.jsx`

Highlights the reasons to choose Vidyam, emphasizing features like personal mentorship, qualified faculty, and comprehensive study materials.

### `ImageSlider.jsx`

An image slider component that automatically cycles through multiple images related to the educational platform, enhancing visual appeal.

### `Programs.jsx`

This is the program pages and it has been used to list the programs.

### `Footer.jsx`

Includes contact information, social media links, and quick links to important sections like courses, demo classes, and contact details.

## Usage

To run the project locally:

##1. Clone the repository:

   git clone https://github.com/your-username/vidyam-educational-platform.git
   
##2.Navigate to the project directory:
 cd vidyam-educational-platform
 
##3.Install dependencies and start
npm i 
npm run dev

