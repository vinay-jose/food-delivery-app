import { useState, useEffect } from "react";
import axios from "axios";
import ListItems from "../utils/ListItems";
import Loader from "../utils/Loader";
  

const Products = () => {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function getProducts(){
      try{
        const response = await axios.get('http://localhost:3001/api/dishes')
        console.log(response.data)
        setProducts(response.data)
        setLoader(false)
      }
      catch(error){
        console.log(error)
        setProducts(
          [
            {
              "id": 7,
              "name": "Idli/Sambhar",
              "img": "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
              "category": "food",
              "price": 180,
              "quantity": 0
            },
            {
              "id": 8,
              "name": "Dal Makhni",
              "img": "https://recipes.timesofindia.com/thumb/53097626.cms?width=1200&height=900",
              "category": "food",
              "price": 180,
              "quantity": 0
            },
          
            {
              "id": 9,
              "name": "Cold Coffee",
              "img": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/cold-coffee-recipe-2.jpg",
              "category": "beverages",
              "price": 80,
              "quantity": 0
            },
            {
              "id": 3,
              "name": "Lassi",
              "img": "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
              "category": "beverages",
              "price": 90,
              "quantity": 0
            },
          
            {
              "id": 5,
              "name": "Tandoori Platter",
              "img": "https://images.slurrp.com/prod/recipe_images/better-butter/tandoori-paneer-platter_HX3XOHVHLY0WD9AXFZZG.webp?impolicy=slurrp-20210601&width=1200&height=675",
              "category": "food",
              "price": 295,
              "quantity": 0
            },
            {
              "id": 6,
              "name": "Naan",
              "img": "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
              "category": "food",
              "price": 20,
              "quantity": 0
            },
            {
              "id": 13,
              "name": "Paneer Butter Masala",
              "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5kecc5mebmjSS-CrZAKaa_RUwoFa5NOuwg&usqp=CAU",
              "category": "food",
              "price": 240,
              "quantity": 0
            },
            {
              "id": 14,
              "name": "Gol Gappe",
              "img": "https://static.toiimg.com/photo/75107900.cms",
              "category": "food",
              "price": 60,
              "quantity": 0
            }
          ]
        )
        setLoader(false)

      }
    }
    getProducts()
  }, [])
  return (
      <>
        {
          loader ?
          <Loader/>
          : 
          <div className={"product-list"}>
                  <div className="product-list-wrapper"> 
                      {
                      products.map(product => (<ListItems 
                                              key = {product.id} 
                                              item = {product}>
                                          </ListItems>))
                      }       
                  </div>
          </div>
        }
      </>
  )
};

export default Products;