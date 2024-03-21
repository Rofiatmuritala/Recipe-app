import { Container, TextField, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../components/navbar/recipe-item";
import { useEffect, useState } from "react";
import noRecipes from "../../assets/Images/undraw_no_data_re_kwbl.svg"
import spinner from "../../assets/Images/infinite-spinner.svg"

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState ("");
    const [loading, setLoading] = useState (false)

    const searchRecipes = () => {

        setLoading(true);
        // prepare url
        // const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        const url = new URL('http://localhost:4000/recipes');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', searchItem);
        
        // fetch recipes
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // update the recipes state
            setRecipes(data.Data);
            // console.log(data);
        })

    .catch((error) =>{
        console.log(error);
    })
    .finally(() => setLoading(false))
        
    }

    useEffect(searchRecipes, []);
    return (
        <Container sx={{ my: '2rem' }} >

            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" 
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && searchRecipes()}
                />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
             { loading? (
                <Container sx={{display: 'flex', justifyContent:'center', marginTop:'10%'}}>
                    <img src={spinner} width="20%" />
                </Container>
             ): recipes.length > 0 ? recipes.map((recipe) => <RecipeItem key={recipe._id}  title={recipe.title} image={recipe.image} id={recipe._id} />) : (
                <Container sx={{display: 'flex', justifyContent:'center', marginTop:'10%'}}>
                     <img src={noRecipes} width="20%" />
                </Container>
             )}
            </Grid>

        </Container>
    );
}