
export default function RecipeCard({recipe}) {
    return (
        <div className="recipe-card" onClick={() => {
            window.open(recipe["recipe"]["url"])
        }}>
            <img src={recipe["recipe"]["image"]}/>
            <p>{recipe["recipe"]["label"]}</p>
        </div>
    )
}