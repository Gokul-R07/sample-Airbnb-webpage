import image from "../images/imgGallery.png";
export function MainContent() {
  return (
    <div>
      <div className="imageGallery">
        <img src={image} alt="" />
      </div>
      <div className="container">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
      </div>
    </div>
  );
}
