import React from "react";
import Slider from "react-slick";

function ServicesCarousel() {
  const services = [
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftkEjEeKNMpc8o1LsWCrB3VfmtSJ4pj0m4A&s", title: "24/7 Service", desc: "Always available for your needs" },
    {img:"https://5.imimg.com/data5/SELLER/Default/2025/7/532248070/JO/LJ/YW/4217800/4-500x500.png", title: "Qualified Doctors", desc: "Experts in every field" },
    { img:"https://easybooking.travel/_nuxt/logo.CxLOWWP1.svg", title: "Easy Booking", desc: "Simple appointment process" },
    {img:"https://img.freepik.com/free-vector/red-asterisk-logo-with-cross_1043-242.jpg", title: "Emergency Care", desc: "Quick help when needed" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PlGmCR46PcRR5FAcH3nmtZiLMXSDmqgmhA&s", title: "Modern Equipment", desc: "Latest technology for treatment" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // 2 services at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
      <Slider {...settings}>
        {services.map((s, i) => (
          <div key={i} className="p-4">
            <div className="bg-blue-50 rounded-lg flex flex-col items-center justify-center shadow-md h-40 p-4 text-center">
              <img className="w-10 h-10 mb-2 rounded-lg" src={s.img}/>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ServicesCarousel;
