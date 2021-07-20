import React, {useRef} from 'react';

export default function ImageToggleOnMouseOver(props) {

  const imageRef = useRef(null);

  return (
    <div>
      <img 
      onMouseOver={() => {
        imageRef.current.src=props.secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src=props.primaryImg;
      }}
      src={props.primaryImg} alt="" 
      height="320"
      width="240"
      ref={imageRef}
      ></img>
    </div>
  );
};
