import Item from "./Item";

const MainContent = () => {
  return (
    <div className="main-content">
      <Item
        title="TITLE HEADING"
        subtitle="Title description"
        description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem minima
        consequuntur laboriosam nesciunt enim, vel deleniti voluptates
        explicabo. Commodi libero blanditiis voluptatem non laboriosam minus
        possimus dignissimos expedita reprehenderit tenetur."
      />
      <Item
        className="item"
        title="TITLE HEADING"
        subtitle="Title description"
        description=" Officia nemo
        aliquam iste voluptates, unde nam, adipisci nesciunt saepe quam
        doloremque temporibus eaque! Optio distinctio quasi fugit ipsa
        veritatis, nisi iste animi.."
      />
    </div>
  );
};

export default MainContent;
