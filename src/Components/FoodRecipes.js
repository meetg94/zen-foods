import Axios from 'axios'
import { useState } from 'react'
import RecipeCard from './RecipeCard'

function FoodRecipes() {

    const [defaultRecipe, setDefaultRecipe] = useState("popular")
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [diet, setDiet] = useState("balanced")

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b1bc7b45&app_key=570c93bce90c9f4f1540df521530a3b4&diet=${diet}`

    async function getRecipes() {
        const result = await Axios.get(url)
        setRecipes(result.data.hits)
        console.log(result.data)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getRecipes()
    }

    return (

        <div className="recipe-container">
            <div className="popular-recipe">
            </div>
            <h1 className="main-heading">Zen Foods</h1>
            <form className="app-search" onSubmit={onSubmit}>
                <input 
                   type="text" 
                   placeholder="Enter Ingredient" 
                   value={query}
                   onChange={(e) => setQuery(e.target.value)} 
                   />
                <input className="app-submit" type="submit" value="Search"/>
            </form>
            
            <select className="diet-label">
                <option onClick={() => setDiet("balanced")}>Balanced</option>
                <option onClick={() => setDiet("high-fiber")}>High-Fiber</option>
            </select>
            <div>
                {recipes.map(recipe => {
                    return <RecipeCard recipe={recipe}/>
                })}
            </div>
        </div>
    )
}

export default FoodRecipes