import LightGallery from "lightgallery/react/Lightgallery.es5";
import React, { useState } from "react";
import "./gallery.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgRotate from "lightgallery/plugins/rotate";
import lgAutoplay from "lightgallery/plugins/autoplay";

const images = [
  { src: "/src/assets/gallery/boat1.jpg", alt: "1", tag: "travel" },
  { src: "/src/assets/gallery/boat2.jpg", alt: "2", tag: "travel" },
  { src: "src/assets/gallery/gold1.jpg", alt: "3", tag: "invest" },
  { src: "src/assets/gallery/gold2.jpg", alt: "4", tag: "invest" },
  { src: "src/assets/gallery/jewell1.jpg", alt: "5", tag: "invest" },
  { src: "src/assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
  { src: "src/assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
  { src: "src/assets/gallery/jewell2.jpg", alt: "6", tag: "invest" },
];

export default function Gallery() {
  // const [searchItem, setSearchItem] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const filterImages = (tag) => {
    if (tag === "All") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((image) => image.tag === tag);
      setFilteredImages(filtered);
    }
  };

  return (
    <div className="gallery pt-10">
      <h1 className="text-center text-5xl font-bold pb-10">Gallery</h1>
      <div className="filter pb-8">
        <button className="all-btn" onClick={() => filterImages("All")}>
          All
        </button>
        <button className="travel-btn" onClick={() => filterImages("travel")}>Travel</button>
        <button className="invest-btn" onClick={() => filterImages("invest")}>Investment</button>
      </div>
      <div className="gallery-main">
        <LightGallery
          onInit={onInit}
          speed={600}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgRotate, lgThumbnail]}
        >
          {filteredImages.map((images, index) => {
            return (
              <a className="imgid" href={images.src} key={index}>
                <img alt={images.alt} src={images.src} />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
}
