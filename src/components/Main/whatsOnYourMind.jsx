import React, { useEffect, useState, useRef } from "react";
import './whatsOnYourMind.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";




const WhatsOnYourMind = () => {

  const scrollContainerRef = useRef(null);
    const scrollLeft = () => {
      scrollContainerRef.current.scrollBy({
        left: -1136, // Adjust the scroll distance (e.g., scroll 200px left)
        behavior: "smooth", // Smooth scrolling effect
      });
  };
  
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 1136, // Adjust the scroll distance (e.g., scroll 200px right)
      behavior: "smooth", // Smooth scrolling effect
    });
  };


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  
  

  useEffect(() => {
    const DataFetchingComponent = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    DataFetchingComponent();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex items-center mx-[200px]">
        <h1 className="container pt-4 text-2xl font-bold">
          {data.data.cards[0].card.card.header.title}
        </h1>
        <div className="flex items-center gap-8">
          <button onClick={scrollLeft} className="">
            <FaArrowAltCircleLeft className="text-3xl" fill="gray" />
          </button>
          <button onClick={scrollRight} className="">
            <FaArrowAltCircleRight className="text-3xl" fill="gray" />
          </button>
        </div>
      </div>

      <div
        className="flex mx-[200px] mt-3 overflow-x-auto scrollbar-hidden"
        ref={scrollContainerRef}
      >
        {data.data.cards[0].card.card.gridElements.infoWithStyle.info.map(
          (item) => {
            const img = imgUrl + item.imageId;
            return (
              <img
                className="w-[145px] mr-[20px] cursor-pointer"
                src={img}
                key={item.id}
              />
            );
          }
        )}
      </div>
      <hr className="border-t w-[1130px] my-[40px] mx-[200px] border-gray-300" />

      {/* {data.data.cards[0].card.card.gridElements.infoWithStyle.info.map(
        (item, index) => (
          <p key={index}>{item.action.text}</p>
        )
      )} */}
    </>
  );
};

export default WhatsOnYourMind;

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png
