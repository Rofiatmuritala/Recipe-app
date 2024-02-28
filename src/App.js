import { createBrowserRouter } from "react-router-dom";
import Recipe from "./Pages/recipe";
import Recipes from "./Pages/recipes";
import Navbar from "./components/navbar";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {path: "/", element: <Recipes/>},
  {path: "/recipe", element: <Recipe/>},
  {path: "/recipe/:id", element: <Recipe/>}
]);

function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
