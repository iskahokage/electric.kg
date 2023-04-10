import styled from "@emotion/styled";
import Link from "next/link";

const Header = () => {
    return (
        <HeaderStyled>
            <div className="wrapper">
                <nav className="nav">
                    <div className="logo-container">
                        <img src="/Logo.svg" alt="" />
                    </div>
                    <ul>
                        <li>
                            <Link href="#">Товары</Link>
                        </li>
                        <li>
                            <Link href="#">Услуги</Link>
                        </li>
                        <li>
                            <Link href="#">Портфолио</Link>
                        </li>
                    </ul>
                </nav>
                <div className="title-container">
                    <h1>
                        Электрокарнизы
                        <br />
                        Кыргызстан
                    </h1>
                    <h2>
                        <ul>
                            <li>100+ довольных клиентов</li>
                            <li>только качественное оборудование</li>
                            <li>работа любой сложности</li>
                            <li>лучшие на рынке</li>
                        </ul>
                    </h2>
                </div>
            </div>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`
    /* background: ${(props) => props.theme.colors.primary}; */
    background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 36.46%,
            rgba(0, 0, 0, 0) 46.35%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url('/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    .wrapper {
        height: 100%;
        .nav {
            display: flex;
            align-items: center;
            /* width: 100vw; */
            justify-content: flex-end;
            margin-right: 200px;
            ul {
                list-style: none;
                display: flex;
                gap: 20px;
                li {
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
        .title-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            color: #fff;
            margin-top: 140px;
            margin-right: 300px;
            h1 {
                font-size: 64px;
                padding-right: 80px;
            }
            h2 {
                font-size: 32px;
            }
        }
    }
`;

export default Header;
