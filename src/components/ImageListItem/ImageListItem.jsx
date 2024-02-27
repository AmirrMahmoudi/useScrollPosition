import "./ImageListItem.css";
export const ImageListItem = ({ img }) => {
  return <img src={img.download_url} className="img" />;
};
