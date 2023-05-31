import { useState } from "react";
import "./SubscribeSection.scss";

const SubscribeSection = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="container">
      <div className="left">
        <p>
          Subscribe to our <span className="bold-text">Newsletter</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae?
        </p>
      </div>
      <div className="right">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <button onClick={handleSubscription}>Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeSection;
