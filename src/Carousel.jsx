import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={() => {
              setActive(index);
            }}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
