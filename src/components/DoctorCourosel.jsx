import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function DepartmentsCarousel() {
  const departments = [
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKr3BQZx4sutXlcsIqzoFrRF7PvBr2vtAULg&s" ,name: "Cardiology", desc: "Heart care and treatment" },
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgC9-7FGm1C9-vlfgHk0Pmwo7smzTrEcXP3g&s", name: "Dermatology", desc: "Skin care and treatment" },
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREc1pfr3Vxs6iAiYsy9o6gHwl_5rWDgUy-Ow&s", name: "Pediatrics", desc: "Child healthcare" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpE1HKbNM8PdPqjSZ8YHpNkBwhtue0IlImA&s",name: "Orthopedics", desc: "Bone and joint care" },
    { img:"https://i.ytimg.com/vi/aF3OgWfht0E/maxresdefault.jpg",name: "Neurology", desc: "Brain and nervous system" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 slides per view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Our Departments
      </h2>
      <Slider {...settings}>
        {departments.map((dept, i) => (
          <div key={i} className="flex justify-center p-3">
            <div className=" h-40 bg-blue-50 rounded-lg shadow-md p-2 flex flex-col items-center justify-center text-center">
              <img className="w-10 h-10 mb-2 rounded-lg" src={dept.img}/>
              <h3 className="font-semibold text-lg text-gray-800">{dept.name}</h3>
              <p className="text-gray-600 mt-2">{dept.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DepartmentsCarousel;
