import React, { useContext, useRef, useState } from "react";
import { productsContext } from "../../context/productContext";
import { serviceContext } from "../../context/serviceContext";
import Button from "./Button";
import Input from "./Input";

const AddForm = ({ page, type }) => {
    const fileInput = useRef(null);

    const [imageName, setImageName] = useState(null);
    const [name, setName] = useState(null);
    const [productType, setproductType] = useState(null);
    const [brand, setBrand] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null);


    const { uploadProduct } = useContext(productsContext);
    const { uploadService } = useContext(serviceContext);

    const types = {
        p: "product",
        s: "service",
    };

    const fileSelectHandler = (e) => {
        setImageName(e.target.files[0]);
    };

    const inputClickHandler = (e) => {
        e.preventDefault();
        fileInput.current.click();
    };

    const dataUploadHandler = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("image", imageName, imageName.name);
        if(type !== types.p ) fd.append("name", name);
        if (type === types.p) {
            fd.append("type", productType);
            fd.append("brand", brand);
            fd.append("description", description);
            fd.append("price", price);
            console.log(fd);
            uploadProduct(fd);
        } else if (type === types.s) {
            uploadService(fd);
        }
    };

    return (
        <div className="formContainer">
            <form className="addForm">
                <p className="title">Добавить {page}:</p>
                {type === types.s ? (
                    <Input
                        onChange={(e) => setName(e.target.value)}
                        field_name={"Название"}
                        type={"text"}
                    />
                ) : (
                    <></>
                )}
                {type === types.p ? (
                    <>
                        <Input
                            onChange={(e) => setproductType(e.target.value)}
                            field_name={"Тип продукта"}
                            type={"text"}
                        />
                        <Input
                            onChange={(e) => setBrand(e.target.value)}
                            field_name={"Брэнд"}
                            type={"text"}
                        />
                        <Input
                            onChange={(e) => setDescription(e.target.value)}
                            field_name={"Описание"}
                            type={"text"}
                        />
                    </>
                ) : (
                    <></>
                )}

                <Input
                    onChange={(e) => setPrice(e.target.value)}
                    field_name={"Цена"}
                    type={"text"}
                />
                <Input
                    ref={fileInput}
                    field_name={"Выберите файл"}
                    type={"file"}
                    onChange={fileSelectHandler}
                />
                <div className="addFormButtonsContainer">
                    <Button
                        onClick={inputClickHandler}
                        text={"Загрузить изображение"}
                    />

                    <Button
                        onClick={dataUploadHandler}
                        text={`Загрузить ` + page}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddForm;
