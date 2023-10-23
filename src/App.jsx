import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError
} from "./pages"

import { loader as landingLoader } from "./pages/Landing"
import { loader as singleCocktailLoader } from "./pages/Cocktail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: "true",
        errorElement: <SinglePageError />,
        element: <Landing />,
        loader: landingLoader
      },
      {
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />
      },
      {
        path: "/newsletter",
        element: <Newsletter />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
