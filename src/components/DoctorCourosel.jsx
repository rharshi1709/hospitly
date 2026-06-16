import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DepartmentsCarousel() {
  const departments = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKr3BQZx4sutXlcsIqzoFrRF7PvBr2vtAULg&s",
      name: "Cardiology",
      desc: "Heart care and treatment",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/042/818/936/small/hair-clinic-dermatology-icon-follicle-grow-emblem-vector.jpg",
      name: "Dermatology",
      desc: "Skin care and treatment",
    },
    {
      img: "https://www.shutterstock.com/image-vector/pediatrics-icon-monochrome-simple-sign-260nw-2266341883.jpg",
      name: "Pediatrics",
      desc: "Child healthcare",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpE1HKbNM8PdPqjSZ8YHpNkBwhtue0IlImA&s",
      name: "Orthopedics",
      desc: "Bone and joint care",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc3nYLp69dkSGR1SRBA46Rz_oU8cvUiJgsw&s",
      name: "Neurology",
      desc: "Brain and nervous system",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
            SPECIALIZED CARE
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-4">
            Our Departments
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Expert medical departments equipped with modern facilities
            to provide comprehensive healthcare services.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {departments.map((dept, i) => (
            <div key={i} className="px-3 py-4">
              <div className="group bg-white rounded-3xl border border-slate-100 p-6 h-60 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* Image */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 shadow-md border border-slate-100">
                    <img
    src={dept.img}
    alt={dept.name}
    className="w-full h-full object-cover"
  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-800">
                  {dept.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 mt-2">
                  {dept.desc}
                </p>

                {/* Accent Line */}
                <div className="w-0 h-1 bg-cyan-500 rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default DepartmentsCarousel;