import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import { getPopularMovies, getUpcomingMovies } from "../services/movies.services";
import { getTopRatedMovies } from "../services/movies.services";


import useSWR from "swr";

import AppCard from "../../../core/components/app_card/provider/app_card";
import LoginView from "../../login/views/login_view";
import { useAuth } from "../../auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";




const HomeView = () => {

  const {logout,isloggedIn} = useAuth();
  console.log(isloggedIn);

  const { 
     data: popularMovies,
     error: popularMoviesError, 
     isLoading: popularMoviesIsLoading,
    } = useSWR('getPopularMovies', getPopularMovies);

    const { 
      data: topRatedMovies,
      error: topRatedMoviesError, 
      isLoading: topRatedMoviesIsLoading,
     } = useSWR('getTopRatedMovies', getTopRatedMovies);

     const { 
      data: upcomingMovies,
      error: upComingMoviesError,
      isLoading: upcomingMoviesIsLoading,
     } = useSWR('getUpComingMovies', getUpcomingMovies);


  return (
    <div>
      
      <AppCarouselSection title={"Popular Movies"} data={popularMovies}/>
      <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies}/>
      <AppCarouselSection title={"Up Coming Movies"} data={upcomingMovies}/>

      <AppButton 
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          border: "2px solid",
          display: "flex",
          margin: "auto",
          marginTop: "30px",
          }}
          onClick={logout}>Cerrar Sesión
      </AppButton>


      
    </div>
  );
};
  
export default HomeView;

//compartir datos entre muchos componentes = Context