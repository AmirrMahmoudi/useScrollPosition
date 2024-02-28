import { ImageListItem } from "../ImageListItem/ImageListItem";
import "./ImageList.css";
export const ImageList = ({ imageList }) => {
  return imageList.map((img) => {
    return (
      <div key={img.id} className="card_item">
        <ImageListItem img={img} />
      </div>
    );
  });
};
