import React from "react";

const WallpaperCard = ({ image, name, description, flexDirection }) => {
  return (
    <div className="wallpaper-container">
      <h2>{name}</h2>
      <div
        style={{
          flexDirection: flexDirection,
        }}
      >
        <div>
          <p>{description}</p>
          <button>Free Download</button>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default WallpaperCard;
