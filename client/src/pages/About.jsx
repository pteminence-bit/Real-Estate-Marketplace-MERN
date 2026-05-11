import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center gap-12 mb-16'>
        <div className='flex-1'>
          <h1 className='text-4xl font-bold mb-6 text-slate-800'>
            Your Edge in Modern <span className='text-blue-600'>Real Estate</span>
          </h1>
          <p className='mb-6 text-slate-600 leading-relaxed text-lg'>
            DwellEdge is more than just a property site; it’s a dynamic marketplace designed to give both sellers and buyers a competitive advantage. We recognized that the traditional real estate process is often slow and disconnected, so we built a platform where technology meets transparency.
          </p>
          <div className='flex gap-4'>
            <div className='bg-blue-50 p-4 rounded-xl border border-blue-100 flex-1'>
              <h3 className='font-bold text-blue-700'>For Sellers</h3>
              <p className='text-sm text-slate-600 mt-1'>List properties with ease, manage inquiries, and reach thousands of verified buyers.</p>
            </div>
            <div className='bg-slate-50 p-4 rounded-xl border border-slate-200 flex-1'>
              <h3 className='font-bold text-slate-800'>For Buyers</h3>
              <p className='text-sm text-slate-600 mt-1'>Browse curated listings and connect directly with owners to find your next home.</p>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <img 
            src="https://unsplash.com" 
            alt="Modern Architecture" 
            className='rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-3 gap-8 py-10 border-t border-slate-100'>
        <div>
          <h2 className='text-2xl font-bold text-slate-800 mb-4'>Our Mission</h2>
          <p className='text-slate-600'>
            To simplify the property journey by providing a high-performance platform that empowers sellers to showcase their homes and help buyers find their perfect "edge" in the market.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-slate-800 mb-4'>Why DwellEdge?</h2>
          <p className='text-slate-600'>
            Unlike generic listing sites, Dwelledge focuses on high-quality media, real-time updates, and a seamless user experience that makes property management feel like second nature.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-slate-800 mb-4'>Our Expertise</h2>
          <p className='text-slate-600'>
            Our team blends real estate knowledge with tech innovation to ensure that every listing on our platform gets the visibility and engagement it deserves.
          </p>
        </div>
      </div>

      <div className='mt-16 p-8 bg-slate-900 rounded-3xl text-center text-white'>
        <h2 className='text-3xl font-bold mb-4'>Ready to list your property?</h2>
        <p className='text-slate-400 mb-6'>Join thousands of owners who trust DwellEdge to showcase their homes.</p>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition'>
          Get Started Now
        </button>
      </div>
    </div>
  );
}
