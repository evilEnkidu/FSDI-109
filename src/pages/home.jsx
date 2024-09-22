import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home page">
      <h2>
        coolRocks' stones will improve your life, bringing you peace and joy.
      </h2>
      <p>
        If you have ever experienced suffering in your life, at all, like, in
        any capacity
        <i>
          <b> IT IS </b>
        </i>
        because you don't have enough shiny rocks to balance your energy out and
        stuff.
      </p>
      <div className="main-flex">
        <div className="image-container">
          <img src="/images/hands.jpeg" alt="" className="main-image" />
        </div>

        <div className="text-container">
          <h4>
            Check out the many ways our shiny rocks can fix your messy life!
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            consequuntur minima tenetur at magni nobis itaque obcaecati
            molestiae hic, nostrum beatae magnam incidunt ex consectetur quaerat
            commodi? Fuga, earum doloremque.
          </p>
          <Link to="/catalog" className="btn btn-large btn-primary">
            Check our rock catalogue!
            <i class="fa-solid fa-circle-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
