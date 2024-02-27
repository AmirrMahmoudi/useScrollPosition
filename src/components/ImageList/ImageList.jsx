import { ImageListItem } from "../ImageListItem/ImageListItem";

export const ImageList = ({ imageList }) => {
  return imageList.map((img) => {
    return (
      <div key={img.id}>
        <ImageListItem img={img} />
      </div>
    );
  });
};
