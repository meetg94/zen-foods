import axios from "axios"

export default function PopularRecipes(){

    const defaulturl = `https://api.edamam.com/api/recipes/v2?type=public&q=popular&app_id=b1bc7b45&app_key=570c93bce90c9f4f1540df521530a3b4`

    function fetchUrl() {
        axios.get(defaulturl)
        
    }
    return (
        <div>
        </div>
    )

}



