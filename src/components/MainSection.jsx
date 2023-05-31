import "./MainSection.scss";
import products from "../../data/MOCK_DATA";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <main className="main">
      <section className="first-section">
        <div className="title">
          <p>What do we do?</p>
          <h2>Our focus</h2>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>Customer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              maiores.
            </p>
            <button>View More</button>
          </div>
          <div className="box">
            <h3>Customer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              maiores.
            </p>
            <button>View More</button>
          </div>
          <div className="box">
            <h3>Customer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              maiores.
            </p>
            <button>View More</button>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="tech-image"></div>
        <div className="tech-info">
          <div className="tech-title">
            <h4>Technologies</h4>
            <h2>Impressing our customers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
              hic molestiae delectus corrupti sapiente unde aliquid
              exercitationem dolorum omnis labore, iusto vitae ipsam temporibus
              voluptas est id reiciendis inventore.
            </p>
          </div>
          <div className="technology">
            <h4>React JS</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              exercitationem!
            </p>
          </div>
          <div className="technology">
            <h4>Node JS</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
              officia.
            </p>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="news-title">
          <p>Curiosity</p>
          <h2>New and trends</h2>
        </div>
        <div className="products-container">
          {products.map((product) => (
            <div className="products" key={product.id}>
              <div className="image">
                <Link className="link" to={`/${product.id}`}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product image"
                  />
                </Link>
              </div>
              <div className="product-content">
                <p>{product.categories}</p>
                <Link className="link" to={`/${product.id}`}>
                  {product.title}
                </Link>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainSection;
