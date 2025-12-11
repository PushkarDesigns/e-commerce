import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-full">

      {/* Hero Background Image */}
      <img src={assets.main_banner_bg} alt="" className="hidden md:block w-full h-[550px] object-cover" />
      <img src={assets.main_banner_bg_sm} alt="" className="md:hidden w-full h-[500px] object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 md:from-black/40 md:to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-white px-6 md:px-16 lg:px-24">

        {/* Smooth Animation */}
        <div className="animate-slide-up space-y-5 max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
            Freshness You Can Trust,<br />
            Savings You Will Love!
          </h1>

          <p className="text-sm md:text-lg opacity-90 max-w-md leading-relaxed">
            Get the best prices on fresh groceries delivered right to your door.
            Quality that makes every meal special.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <Link
              to="/products"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary/80 transition-all text-white font-semibold shadow-lg hover:shadow-xl"
            >
              Shop Now
              <img
                src={assets.white_arrow_icon}
                alt=""
                className="md:hidden transition group-focus:translate-x-1"
              />
            </Link>

            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary/80 transition-all text-white font-semibold shadow-lg hover:shadow-xl"
            >
              Explore Deals
              <img
                src={assets.white_arrow_icon}
                alt=""
                className="md:hidden transition group-focus:translate-x-1"
              />
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero
