import React from "react";
import { IMG_API } from "../../consts";
import Loader from "../loader/Loader";
import "./ProjectCard.scss"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCard = ({ data }) => {
    if (data.length === 0) return <Loader />;
    return (
        <>
            {data.map((item) => (
                <div className="projectCard" key={item.id}>
                    <div className="slider-container">
                        <div className="project-container">
                            <Swiper
                                modules={[
                                    Navigation,
                                    Pagination,
                                ]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                onSlideChange={() =>
                                    console.log("slide change")
                                }
                                onSwiper={(swiper) => console.log(swiper)}
                                loop='true'
                            >
                                {item.project_images.map((img) => (
                                    <SwiperSlide key={img.id}>
                                        <img
                                            key={img.id}
                                            src={IMG_API + img.name}
                                            alt=""
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="project-container">
                            <p className="project-title">{item.name}</p>
                            <ul className="project-details">
                                Проделанные работы:
                                <li>{item.description}</li>
                                <li>Монтаж и установка навесных панелей</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCard;
