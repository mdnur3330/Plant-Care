import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import { useLoaderData } from 'react-router';
import HomeSection from './HomeSection';
import TopRatingBestSelling from './TopRatingBestSelling';

const Home = () => {
    const allPlant = useLoaderData()
    const [plants, setPlants] = useState([])
    console.log(allPlant);
    useEffect(()=>{
        setPlants(allPlant.slice(0,6))
    },[allPlant])
    return (
        <div>    
            <Hero></Hero>
            <HomeSection></HomeSection>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <h1 className='text-4xl my-5 font-bold'>New Plants section</h1>
                      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        
                       {plants.map(plant => <div className="overflow-hidden transition-shadow duration-300  rounded shadow-sm border border-gray-300" key={plant._id}>
                          <div>
                            <img
                            src={plant?.photo}
                            className="object-cover w-full h-64 border-b border-gray-300"
                            alt=""
                          />
                          </div>
                          <div className="p-5">
                            <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
                              <p>
                                last-Watered-date
                              </p>
                              <span>— {plant.lastWateredDate}</span>
                            </div>
                            <p
                              className="inline-block mb-3 text-2xl font-bold "
                            >
                              {plant.plantName}
                            </p>
                            <p className="mb-2 text-gray-700 h-12 truncate">
                              {plant.description}
                            </p>
                          </div>
                        </div>)}
                        
                      </div>
                    </div>
            </div>
            <TopRatingBestSelling></TopRatingBestSelling>
        </div>
    );
};

export default Home;