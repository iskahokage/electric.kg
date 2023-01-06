import React, { useRef } from "react";
import Input from "./Input";

const AddForm = ({ page }) => {
    const fileInput = useRef(null);

    const imageSelectHandler = (e) => {
        e.preventDefault();
        console.log(fileInput);
        fileInput.current.click();
    };

    return (
        <div className="formContainer">
            <form className="addForm" onSubmit={""}>
            <p className="title">Добавить {page}:</p>
                <Input field_name={"Название"} type={"text"} />
                <Input field_name={"Описание"} type={"text"} />
                <Input field_name={"Цена"} type={"text"} />
                <Input
                    ref={fileInput}
                    field_name={"Выберите файл"}
                    type={"file"}
                />
                <div className="addFormButtonsContainer">
                    <button onClick={imageSelectHandler}>
                        {" "}
                        Загрузить изображение
                    </button>
                    <button>Загузить {page}</button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;
