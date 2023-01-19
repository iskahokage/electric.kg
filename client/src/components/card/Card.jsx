import React, { useContext, useEffect, useState } from "react";
import Loader from "../loader/Loader";

import { IMG_API } from "../../consts";
import { authContext } from "../../context/authContext";
import Button from "../addForm/Button";
import CardDetails from "./CardDetails";
import { productsContext } from "../../context/productContext";
import { cartContext } from "../../context/cartContext";
const Card = ({ data }) => {
    const { isAuth } = useContext(authContext);
    const { getOneProduct, oneProduct, deleteProduct, productToEdit } =
        useContext(productsContext);

    const {addInCart, itemsInCart, } = useContext(cartContext)

    const [modal, setModal] = useState({ isOpen: false, type: null });

    useEffect(() => {
    }, [modal, itemsInCart]);
    
    

    // const checkItemInCart = () => {
    //     if(itemsInCart.products){

    //     }
    // }
    console.log(itemsInCart)

    const handleDetailsClick = (id) => {
        console.log(id);
        setModal({ isOpen: true, type: "detail" });
        getOneProduct(id, "detail");
    };

    const handleEditClick = (id) => {
        setModal({ isOpen: true, type: "edit" });
        getOneProduct(id, "edit");
    };
    

    const handleCartClick = (product) => {
        addInCart(product)
        console.log(itemsInCart)
    }

    if (data.length === 0) return <Loader />;

    if (modal.isOpen)
        return (
            <CardDetails
                data={modal.type === "detail" ? oneProduct : productToEdit}
                setModal={setModal}
                modalType={modal.type}
            />
        );

    return (
        <div className="card-container">
            {data.map((item) => (
                <div className="card" key={item.id}>
                    <div className="card-container-edit">
                        <div style={{display: 'flex'}}>
                            <div
                                className="image-container"
                                style={{
                                    backgroundImage: `url(${
                                        IMG_API + item.image
                                    })`,
                                }}
                            ></div>
                            <div className="details-container">
                                <p className="card-title">{item.name}</p>
                                <p className="card-title">
                                    Цена: {item.price} сом
                                </p>
                                <div className="button-container">
                                    <Button
                                        onClick={() =>
                                            handleDetailsClick(item.id)
                                        }
                                        text={"Подробнее"}
                                    />
                                    <Button onClick={()=> handleCartClick(item)} text={ true ? "В корзину" : "Убрать из корзины"} />
                                    <Button text={"Купить"} />
                                </div>
                            </div>
                        </div>
                        {isAuth ? (
                            <div style={{display: 'flex', margin: '0 auto', width: '100%', justifyContent: 'space-around'}}>
                                <Button
                                    onClick={() => handleEditClick(item.id)}
                                    text={"Редактировать"}
                                />
                                <Button
                                    onClick={() => deleteProduct(item.id)}
                                    text={"Удалить"}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
