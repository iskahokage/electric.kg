import React, { useContext, useEffect, useRef, useState } from "react";
import { IMG_API } from "../../consts";
import { productsContext } from "../../context/productContext";
import Button from "../addForm/Button";
import Input from "../addForm/Input";

const CardDetails = ({ data, setModal, modalType }) => {
    const fileInput = useRef(null);

    const {editProduct} = useContext(productsContext);
    const [imageName, setImageName] = useState(null)
    const [editedItem, setEditedItem] = useState(data);

    useEffect(() => {
        console.log(editedItem);
        setEditedItem(data);
    }, [data]);

    const fileSelectHandler = (e) => {
        setImageName(e.target.files[0]);
    };

    const inputClickHandler = () => {
        console.log(fileInput);
        fileInput.current.click();
    };

    const handleEditInput = (e) => {
        let patched = {
            ...editedItem,
            [e.target.name]: e.target.value,
        };
        setEditedItem(patched);
    };

    const handlePatchClick = () => {
        editProduct(editedItem.id, editedItem)
        setModal(false)
    }

    const detailType = () => {
        console.log(data)
        return (
            <div>
                <h2>{data.brand}</h2>
                <h1>{data.type}</h1>
                <h3>{data.description}</h3>
                <h4>{data.price}</h4>
            </div>
        );
    };

    const editType = () => {
        return (
            <div>
                <Input
                    name={"type"}
                    value={editedItem.type}
                    field_name={"Тип продукта"}
                    onChange={handleEditInput}
                    type="text"
                />
                <Input
                    name={"brand"}
                    value={editedItem.brand}
                    field_name={"Брэнд"}
                    onChange={handleEditInput}
                    type="text"
                />
                <Input
                    name={"description"}
                    value={editedItem.description}
                    field_name={"Описание"}
                    onChange={handleEditInput}
                    type="text"
                />
                <Input
                    name={"price"}
                    value={editedItem.price}
                    field_name={"Цена"}
                    onChange={handleEditInput}
                    type="text"
                />
                <Input
                    ref={fileInput}
                    field_name={"Выберите файл"}
                    type={"file"}
                    onChange={fileSelectHandler}
                />
            </div>
        );
    };

    return (
        <div className="details">
            <div className="card-container">
                <div className="card-container-edit">
                    <div className="card">
                        <div
                            className="image-container"
                            onClick={
                                modalType === "edit" ? inputClickHandler : null
                            }
                            style={{
                                backgroundImage: `url(${IMG_API + data.image})`,
                            }}
                        ></div>
                        <div className="details-container">
                            <span
                                className="exit-btn"
                                onClick={() => setModal(false)}
                            >
                                ×
                            </span>
                            {
                                modalType === "detail" ? detailType() : modalType === "edit" ? editType() : ''
                            }
                        </div>
                    </div>
                    {modalType === "edit" ? (
                        <div style={{ width: "250px", margin: "10px auto" }}>
                            <Button text={"Сохранить"} onClick={handlePatchClick} />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
