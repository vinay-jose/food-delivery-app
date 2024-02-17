const { Dish } = require("../models/Dishes");

const getDishes = (req, res)=>{
  async function getData(){
    const dishes = await Dish.find({});
    res.send(dishes);
  };  
  getData();
};

const getHealth = (req, res)=>{
    res.send("Food Delivery App Backend is running...");
}

const postDish = (req, res) => {
    console.log(req.body);

    const dish = new Dish({ 
      id: req.body.id,
      name: req.body.name,
      img: req.body.img,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity
    });
    dish.save().then(() => console.log('dish saved!'));
    res.send("dish saved!")
}

module.exports = {getDishes, getHealth, postDish};