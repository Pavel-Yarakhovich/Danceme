import React, { useState } from "react";
import Button from "../../shared/Button";
import TypeOptions from "./TypeOptions";
import { useMutation } from "@apollo/react-hooks";
import { addItemMutation } from "./mutations";
import Confirmation from "./ConfirmationPopup";
import ErrorMessage from "../../shared/ErrorMessage";
import PreviewPlaceholder from "../../assets/image/no_photo.png";
import imgBase64 from "../../utils/imgBase64";

import * as Styled from "./styled";

export default () => {
  const [formValues, setFormValues] = useState({ hit: false });
  const [formTouched, setFormTouched] = useState({
    description: false,
    size: false,
    manufacturer: false,
    hit: false,
    kind: false,
  });
  const [addItem] = useMutation(addItemMutation);
  const [showMessage, setShowMessage] = useState(false);
  const [uploadedImage, setUploadedImage] = useState();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setFormTouched({
      ...formTouched,
      [e.target.name]: true,
    });
  };
  const handleTypeChange = (e) => {
    setFormValues({
      ...formValues,
      kind: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const image = await imgBase64(formValues.image);
    await addItem({
      variables: {
        image: image,
        description: formValues.description,
        size: formValues.size,
        manufacturer: formValues.manufacturer,
        hit: false,
        kind: formValues.kind,
      },
    });
    setFormValues({ hit: false });
    setShowMessage(true);
    console.log("Request is done");
  };

  const handleFileChosen = (file) => {
    const src = URL.createObjectURL(file);
    setFormValues({
      ...formValues,
      image: file,
    });
    setUploadedImage(URL.createObjectURL(file));
    URL.revokeObjectURL(src);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Motto h1>Добавить товар:</Styled.Motto>
        <Styled.Form>
          <Styled.UploadGroup>
          <Styled.Motto>Изображение товара</Styled.Motto>
            <Styled.UploadImage>
              <Styled.UploadedImage
                src={uploadedImage || PreviewPlaceholder}
              />
              <Styled.UploadLabel>
                <Styled.UploadInput
                  type="file"
                  onChange={(e) => handleFileChosen(e.target.files[0])}
                />
                Выбрать изображение
              </Styled.UploadLabel>
            </Styled.UploadImage>
          </Styled.UploadGroup>
          <Styled.InputWrapper>
            <Styled.Motto>Описание товара</Styled.Motto>
            <Styled.TextArea
              name="description"
              placeholder="Описание товара"
              onChange={handleInputChange}
              value={formValues.description || ""}
              error={!formValues.description && formTouched.description}
            />
            <ErrorMessage
              error={!formValues.description && formTouched.description}
              errorMessage="Это поле обязательно к заполнению"
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Motto>Размеры в наличии</Styled.Motto>
            <Styled.Input
              type="text"
              name="size"
              placeholder="Размеры в наличии"
              onChange={handleInputChange}
              value={formValues.size || ""}
              error={!formValues.size && formTouched.size}
            />
            <ErrorMessage
              error={!formValues.size && formTouched.size}
              errorMessage="Это поле обязательно к заполнению"
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Motto>Производитель</Styled.Motto>
            <Styled.Input
              type="text"
              name="manufacturer"
              placeholder="Производитель"
              onChange={handleInputChange}
              value={formValues.manufacturer || ""}
              error={!formValues.manufacturer && formTouched.manufacturer}
            />
            <ErrorMessage
              error={!formValues.manufacturer && formTouched.manufacturer}
              errorMessage="Это поле обязательно к заполнению"
            />
          </Styled.InputWrapper>

          <TypeOptions changedRadio={handleTypeChange} defaultValue={null} />

          <Button
            type="submit"
            clicked={handleSubmit}
            disabled={
              !formValues.description ||
              !formValues.size ||
              !formValues.manufacturer ||
              !formValues.kind
            }
          >
            Отправить
          </Button>
        </Styled.Form>
      </Styled.Container>
      <Confirmation showMessage={showMessage} message={`Товар добавлен`} />
    </>
  );
};
