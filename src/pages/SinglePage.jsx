import { Link, useParams } from "react-router-dom";
import products from "../../data/MOCK_DATA";
import "./SinglePage.scss";

const SinglePage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id.toString() === id);

  const { image, title, description } = product;

  return (
    <div className="details">
      <h1>Details page</h1>

      <img src={image} alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default SinglePage;
