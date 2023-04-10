import styled from "@emotion/styled";
import { FC } from "react";

const Main: FC = (props) => {
    console.log(props)
    return (
        <MainStyled>
            <div className="main-wrapper">
                <p className="title">Виды карнизов</p>
                <div className="rod-types">
                    <div className="rod-card">
                        <div className="img-container">
                            <img src="/corner 1.png" alt="" />
                        </div>
                        <p className="rod-type">Угловые</p>
                    </div>
                    <div className="rod-card">
                        <div className="img-container">
                            <img src="/direct 1.png" alt="" />
                        </div>
                        <p className="rod-type">Прямые</p>
                    </div>
                    <div className="rod-card">
                        <div className="img-container">
                            <img src="curved 1.png" alt="" />
                        </div>
                        <p className="rod-type">Радиальные</p>
                    </div>
                </div>
                <p className="title">Наши преимущества</p>
                <div className="advantages">
                    <ul>
                        <li>Выдериживает большие нагрузки</li>
                        <li>Бесшумные моторы</li>
                        <li>Простая установка</li>
                        <li>Плавное движение штор</li>
                        <li>Надежные комплектующие</li>
                    </ul>
                </div>
            </div>
        </MainStyled>
    );
};


const MainStyled = styled.main`
    background-color: #9e9e9e;
    .main-wrapper {
        max-width:1200px;
        margin: 0 auto;
        .title {
            font-size: 48px;
            text-align: center;
            color: #fff;
            padding: 20px 0;
            font-weight: 700;
        }
        .rod-types {
            display: flex;
            gap: 100px;
            justify-content: center;
            .rod-card {
                height: 300px;
                width: 400px;
                border-radius: 15px;
                background-color: #4b4b4b;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                .img-container {
                    height: 80%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .rod-type {
                    height: 15%;
                    color: #fff;
                    font-size: 20px;
                }
            }
        }
        .advantages {
            ul {
                color: #fff;
                font-size: 30px;
            }
        }
    }
`;


export async function getServerSideProps() {
    const {API} = process.env;
    
    const res = await fetch(`${API}/api/projects`)
    // console.log(res)
    const data = await res.json()

    return{
        props: {
            projects: data
        }
    }
}

export default Main;
