import React from 'react';

const quotes = [
  {
    name: "Albert Einstein",
    quote: "It’s not that I’m so smart, it’s just that I stay with problems longer",
    image: "https://static.wixstatic.com/media/e9843a_bc85c0d5894145ad8fcceedd84b5859a~mv2.jpg/v1/fill/w_251,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Einstein%20Bhai.jpg"
  },
  {
    name: "Benjamin Franklin",
    quote: "An investment in knowledge pays the best interest",
    image: "https://static.wixstatic.com/media/e9843a_d5c3d1dc7dec438882bb706c57c1363a~mv2.jpg/v1/fill/w_251,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Benjamin%20bhai.jpg"
  },
  {
    name: "Mahatma Gandhi",
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
    image: "https://static.wixstatic.com/media/e9843a_d976fa68eb984994b7b372ddaa9ec4de~mv2.jpg/v1/fill/w_251,h_251,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Gandhi%20bhai.jpg"
  }
];

const Quotes = () => {
  return (
    <section className="my-12 text-center bg-sky-200 py-8">
      <h2 className="text-3xl font-bold text-yellow-500 
      underline decoration-slate-700 mb-8">Quotes from Famous Personalities</h2>
      <div className="flex justify-center space-x-8">
        {quotes.map((quote, index) => (
          <div key={index} className="max-w-xs text-center">
            <img className="rounded-full mx-auto mb-4" src={quote.image} alt={quote.name} />
            <p className="font-semibold">{quote.quote}</p>
            <p className="text-gray-600 mt-2">- {quote.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
