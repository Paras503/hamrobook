import Hero from "../components/Hero"
import RecentlyAdded from "../components/RecentlyAdded"

import Cart from "./Cart"
import Favourites from "../components/Profile/Favourites"
import FeatureBooks from "../components/featurebook"
import CarouselComponent from "../components/carosole"
import GenresList from "../components/GenresList"
import AuthorsList from "../components/AuthorsList"
const API_BASE_URL = "https://backend-bice-sigma-99.vercel.app";
const Home = () => {
  return (
    <div className=" ">
      <CarouselComponent />
      <Hero />
      <GenresList />
      <FeatureBooks />
      <RecentlyAdded />

      <h1 className=" mt-8 px-4 text-3xl font-bold mb-2">Favourites</h1>
            <p className="mt-8 px-4 text-gray-600 mb-4">Browse your saved books</p>
            
      <Favourites />
   

      <AuthorsList />

    </div>
  )
}

export default Home
