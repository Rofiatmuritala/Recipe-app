import { Container, TextField, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../components/navbar/recipe-item";
import { useEffect, useState } from "react";


export default function Recipes() {

    const [recipes, setRecipes] = useState([]);

    const searchRecipes = () => {
        // prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', '2896e84b50b6471b9fb44abbc70e0a2c')
        // fetch recipes
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // update the recipes state
            setRecipes(data.results);
            // console.log(data);
        })

    .catch((error) =>{
        console.log(error);
    })
        
    }

    useEffect(searchRecipes, []);
    return (
        <Container sx={{ my: '2rem' }} >

            <TextField
                fullWidth
                id="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" />

            <Grid sx={{ mt: '1rem' }} container spacing={3}>
             {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
            </Grid>

        </Container>
    );
}