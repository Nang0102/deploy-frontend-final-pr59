import "../rooms.css";
import ImageDetail from "./ImageDetails/ImageDetail";

export const Detail = () => {
  return (
    <div>
      <div
        className="content-rooms"
        style={{
          backgroundImage:
            "url('https://erios.webhotel.vn/images/breadcrumb-bg.jpg')",
        }}
      >
        <p className="text-rooms">Rooms Detail</p>
        <ImageDetail />
      </div>
    </div>
  );
};
