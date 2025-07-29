import React from "react";
import "./whatsOnYourMind.css";
import { useEffect, useState, useRef } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { ReactComponent as GreenStar } from '../../assets/green_star.svg';

const TopRestaurantChains = () => {

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
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";



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
  0;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex items-center mx-[200px]">
        <h1 className="container pt-4 text-2xl font-bold">
          {data.data.cards[1].card.card.header.title}
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
        {data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
          (item) => {
            const img = imgUrl + item.info.cloudinaryImageId;
            return (
              <div className="inline-flex flex-col items-center mt-5 mr-10">
                <div className="w-[250px] h-[182px] shadow-lg rounded-[40px]">
                  <img
                    className="cursor-pointer object-fill w-[250px] h-[182px] rounded-[40px]"
                    src={img}
                    key={item.info.id}
                  />
                </div>
                <div className="flex flex-col w-full mt-2 ml-3">
                  <h5 className="mt-2 text-lg font-semibold">{item.info.name}</h5>
                  <div className="flex items-center gap-1">
                    <GreenStar className="" />
                    <p className="text-gray-600">
                      {item.info.avgRatingString}
                    </p>
                    <p className="text-black font-semibold">
                      <span>&#8226;</span> {item.info.sla.slaString}
                    </p>
                  </div>
                  <p className="text-gray-600">
                    {item.info.cuisines.join(", ")}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>

      <hr className="border-t w-[1130px] my-[40px] mx-[200px] border-gray-300" />
    </>
  );
};
// e0839ff574213e6f35b3899ebf1fc597  data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].
export default TopRestaurantChains;
