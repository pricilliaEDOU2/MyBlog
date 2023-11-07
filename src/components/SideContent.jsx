import MyImage from "../assets/MyImage.jpeg";
const SideContent = () => {
  return (
    <div className="side-content">
      <h2>ABOUT ME</h2>
      <img src={MyImage} alt="My Image" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
    </div>
  );
};
export default SideContent;
