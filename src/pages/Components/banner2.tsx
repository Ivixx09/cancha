import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function Mycarousel(props) {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true} // Auto-play enabled
      autoPlaySpeed={2000} // Auto-play speed in milliseconds
      infinite={true} // Infinite loop
      draggable={false}
      swipeable={false}
      keyBoardControl={true}
      customTransition="transform .5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      
    >
        
      <div>
        <img src="/images/logo1.png" alt="" className="w-32 h-32" />
      </div>
      <div>
        <img src="/images/logo2.png" alt="" className="w-32 h-32" />
      </div>
      <div>
        <img src="/images/logo3.png" alt="" className="w-32 h-32" />
      </div>
      <div>
        <img src="/images/logo4.png" alt="" className="w-32 h-32" />
      </div>
      <div>
        <img src="/images/logo5.png" alt="" className="w-32 h-32" />
      </div>
      
    </Carousel>
  );
}

export default Mycarousel;
