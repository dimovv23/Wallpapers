import { wallpapers } from "../constants/constants";
import WallpaperCard from "./WallpaperCard";

const Content = () => {
  return (
    <div className="content-container">
      {wallpapers.map((wallpaper) => (
        <WallpaperCard
          name={wallpaper.name}
          description={wallpaper.description}
          image={wallpaper.image}
          flexDirection={wallpaper.flexDirection}
        />
      ))}
    </div>
  );
};

export default Content;
