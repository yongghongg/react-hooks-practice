import React, { useRef, useEffect, useState } from 'react';

export default function ImageToggleOnScroll(props) {

  const imageRef = useRef(null);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <div>
      <img
      src={inView ? props.secondaryImg : props.primaryImg}
      alt=""
      ref={imageRef}
      height="320"
      width="240"
      >
      </img>
    </div>
  )
};
