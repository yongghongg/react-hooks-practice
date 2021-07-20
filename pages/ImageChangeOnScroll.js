import React from 'react';
import ImageToggleOnScroll from "/src/ImageToggleOnScroll";


export default function ImageChangeOnScroll() {

  const images = [];
  for(var i=0;i<=3;i++) {
        images.push(<ImageToggleOnScroll primaryImg="/static/img/pic-bw.png"
        secondaryImg="/static/img/pic-color.jpg" />);
        images.push(
        <ImageToggleOnScroll secondaryImg="/static/img/bill_gates_color.jfif"
        primaryImg="/static/img/bill_gates_bw.jpg" />);
  }

  return (
    <div>
      <p>test</p>
      {images}
    </div>
  );
};

