import React from "react";
import { AppSwiper }  from "../app_swiper/app_swiper";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";
import AppTitle from "../app_title/app_title";

/* 
    https://www.npmjs.com/package/react-loading-skeleton
*/

const AppCarouselSection = ({ title, data }) => {
  return (
    <>
      <h1>{title}</h1>
      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <div>
            <h3
                style={{
                  height: "50px",
                  width: "250px",
                  position: "relative",
                  color: "white",
                  textSizeAdjust: "auto",
               
                
                  
                }}>{e.title}</h3>



            </div>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "10px",
                borderStyle: "solid",
              }}
              >
               
              </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>


    </>
  );
};

export default AppCarouselSection;

/* 
    const sliderRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
*/