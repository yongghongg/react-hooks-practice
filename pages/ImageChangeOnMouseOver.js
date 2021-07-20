import React from 'react';
import ImageToggleOnMouseOver from "/src/ImageToggleOnMouseOver";


export default function ImageChangeOnMouseOver() {

  const images = [];
  for(var i=0;i<=3;i++) {
        images.push(      <ImageToggleOnMouseOver primaryImg="/static/img/pic-color.jpg"
        secondaryImg="/static/img/pic-bw.png" />);
        images.push(
        <ImageToggleOnMouseOver primaryImg="/static/img/bill_gates_color.jfif"
        secondaryImg="/static/img/bill_gates_bw.jpg" />);
  }

  return (
    <div>
      <p>test</p>
      {images}
    </div>
  );
};

