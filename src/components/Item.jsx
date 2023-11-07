import MyImage from "../assets/MyImage.jpeg";

const Item = (props) => {
  return (
    <section className="item">
      <h2>{props.title ?? "AUCUN TITRE RENSEIGNE"}</h2>
      <h4>{props.subtitle}</h4>
      <img src={MyImage} alt="My Image" />
      <p>{props.description ?? "AUCUNE DESCRIPTION"}</p>
    </section>
  );
};
export default Item;
