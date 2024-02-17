import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      {/* <h1>Welcome foodie...</h1> */}
      <p>At Eatsy.com, we're passionate about bringing people together through food.</p>
      <p>Whether you're craving a delicious meal delivered right to your doorstep, 
        looking for the perfect restaurant to dine in, searching for new recipes to try at home, 
        or simply want to connect with fellow foodies, Eatsy.com is your ultimate destination.</p>
      <div className="feature-container">
        <NavLink to="/dishes" style={{ textDecoration: 'none' }}>
            <div className="feature">
                <h2>Food Delivery</h2>
                <p>Enjoy the convenience of ordering your favorite dishes from local restaurants and 
                having them delivered straight to your door. With a wide range of cuisines to choose from, 
                satisfying your cravings has never been easier!</p>
            </div>
        </NavLink>
        <NavLink to="/restaurants" style={{ textDecoration: 'none' }}>
            <div className="feature">
                <h2>Restaurant Reviews</h2>
                <p>Discover the best dining experiences in your area with our comprehensive restaurant reviews. 
                    From cozy cafes to upscale eateries, our community of foodies shares honest and insightful 
                    feedback to help you make informed decisions about where to dine.</p>
            </div>
        </NavLink>
        <NavLink to="/recipes" style={{ textDecoration: 'none' }}>
            <div className="feature">
                <h2>Recipes</h2>
                <p>Elevate your culinary skills with our collection of mouthwatering recipes. Whether you're a 
                    seasoned chef or a kitchen novice, our easy-to-follow recipes cater to all skill levels and tastes. 
                    From quick weekday meals to impressive dinner party dishes, we've got you covered!</p>
            </div>
        </NavLink>
        <NavLink to="/recipes" style={{ textDecoration: 'none' }}>
            <div className="feature">
            <h2>Forum Discussions</h2>
            <p>Join the conversation and connect with fellow food enthusiasts in our vibrant discussion forum. 
                Share your favorite recipes, restaurant recommendations, cooking tips, and more. With a supportive 
                community of foodies by your side, every culinary adventure is more enjoyable!</p>
            </div>
        </NavLink>
      </div>
      {/* <p>Join us at Eatsy.com and embark on a delectable journey filled with delicious food, memorable dining experiences, and lasting friendships. Bon appétit!</p> */}
    </div>
  );
}

export default About;
