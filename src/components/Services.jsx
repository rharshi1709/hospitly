import React from "react";
import Slider from "react-slick";

function ServicesCarousel() {
  const services = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftkEjEeKNMpc8o1LsWCrB3VfmtSJ4pj0m4A&s",
      title: "24/7 Service",
      desc: "Always available for your needs",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2025/7/532248070/JO/LJ/YW/4217800/4-500x500.png",
      title: "Qualified Doctors",
      desc: "Experts in every field",
    },
    {
      img: "https://easybooking.travel/_nuxt/logo.CxLOWWP1.svg",
      title: "Easy Booking",
      desc: "Simple appointment process",
    },
    {
      img: "https://img.freepik.com/free-vector/red-asterisk-logo-with-cross_1043-242.jpg",
      title: "Emergency Care",
      desc: "Quick help when needed",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PlGmCR46PcRR5FAcH3nmtZiLMXSDmqgmhA&s",
      title: "Modern Equipment",
      desc: "Latest technology for treatment",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide">
            WHY CHOOSE HOSPITLY
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-800">
            Healthcare Services
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Providing exceptional healthcare experiences with expert doctors,
            modern facilities, and patient-centered care.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {services.map((s, i) => (
            <div key={i} className="px-3 py-4">
              <div className="group bg-white rounded-3xl border border-slate-100 p-6 h-56 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition duration-300">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-10 h-10 object-contain bg-white p-1 rounded-lg"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {s.desc}
                </p>

                {/* Hover Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ServicesCarousel;