import { useState, useEffect } from "react";
import axios from "axios"; 
import Loader from "../utils/Loader";
  

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function getRecipes(){
            try{
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=indian%20food&app_id=3ffed83d&app_key=d0720ebcd02b834e9f4c728f8d48347a`);
                console.log(response.data.hits);
                setRecipes(response.data.hits);
                setLoader(false);
            }
            catch(error){
                console.error(error);
            }
        }
        getRecipes();
    },[]);

    // const handleClick = (recipe)

    return (
        <>
        {
            loader ?
            <Loader/>
            :                    
            <div className={"product-list"}>
                    <div className="product-list-wrapper"> 
                        {
                        recipes.map(recipe => {
                            return (
                                <div className="item-card">
                                    <div className="item-image">
                                        <img height="120px" width="120px" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                                    </div>
                                    <div className="item-details">
                                        <h4 id="name">{recipe.recipe.label}</h4>
                                        <h4><small>Calorie count: </small>{Math.trunc(recipe.recipe.calories)}</h4>
                                        <button>View Recipe</button>
                                    </div>                                
                                </div>
                            )
                        })
                        }       
                    </div>
            </div>
        }
        </>
    )
};

export default Recipes;