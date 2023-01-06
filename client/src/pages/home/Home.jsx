import React from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

const Home = () => {
    return (
        <div className="container">
            <section className="section first">
                <p>
                    Наша команда работает больше 10 лет на рынке Кыргызстана.<br />
                    Делаем свою работу качественно.
                </p>
                <div className="img-container">
                    <img src={img1} alt="" />
                </div>
            </section>
            <section className="section second">
                <p>
                    Занимаемся проводкой и починкой электричества любой
                    сложности. <br /> <br />
                    Начиная от розеток и заканчивая монтажем проводки.
                </p>
                <div className="img-container">
                    <img src={img2} alt="" />
                </div>
            </section>
            <section className="section third">
                <p>
                    За нашими плечами и опытом более сотни домов и предприятий
                </p>
                <div className="img-container">
                    <img src={img3} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;
