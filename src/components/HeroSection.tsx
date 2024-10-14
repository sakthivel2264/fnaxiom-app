import React from 'react';

const assessments = [
  { title: 'CODING CHALLENGE' },
  { title: 'PROJECT SUBMISSION' },
  { title: 'PROJECT QUIZ' },
  { title: 'CODE ASSESSMENT' },
  { title: 'LIVE ASSESSMENT' },
  { title: 'PORTFOLIO ASSESSMENT' },
];

const HeroSection: React.FC = () => {
  return (
    <section className='min-h-screen'>
      <div className="text-center text-white flex flex-row justify-center items-center lg:items-center py-10 pt-40">
      <div className='p-1 lg:w-auto w-auto md:w-auto border rounded-xl bg-white/0 backdrop-blur-sm'>
      <h1 className="lg:text-3xl text-lg font-bold">WELCOME TO </h1> 
      <h1 className='lg:text-5xl text-2xl font-extrabold'>FNAXIOM</h1>
      <h1 className="lg:text-3xl text-lg font-bold"> FULL STACK</h1>
      <h1 className="lg:text-3xl text-lg font-bold">INTERSHIP</h1>
      <div className='mt-2 px-8 py-2 border rounded-full bg-gradient-to-r from-blue-200 to-red-500 text-xs'>JOIN US NOW</div>
      <button className="mt-4 px-8 py-3 bg-red-500 rounded-full font-bold">GET STARTED</button>
      </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {assessments.map((item, index) => (
            <div key={index} className="p-8 w-32 text-white rounded-lg">
              <h3 className="text-lg font-bold flex">{item.title}</h3>
              <button className="mt-4 px-8 py-1 bg-red-500 rounded-full font-bold text-sm">GET STARTED</button>
            </div>
          ))}
        </div>
      </div>


    </section>
    
  );
};

export default HeroSection;
