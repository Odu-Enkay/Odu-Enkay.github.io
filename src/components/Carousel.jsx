import React from "react";
import Slider from "react-slick";

const slides = [
  { image: "/images/img2.png", title: "Slide Two" },
  { image: "/images/img3.png", title: "Slide Three" },
];


function NextArrow(props) {
  const { onClick } = props;
  return (
    
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 2,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        zIndex: 2,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
      }}
    >
      <ArrowBackIos fontSize="small" />
    </IconButton>
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
  };

  return (
    // ✅ Full width container
    <div style={{ width: "100%", margin: 0, padding: 0, overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {/* ✅ Image fills entire screen width */}
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",        // full viewport width
                height: "550px",       // full viewport height 
                borderRadius:'12px',
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
