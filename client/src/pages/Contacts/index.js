import React, { useState } from "react";
import Button from "../../shared/Button";
import ConnectOptions from "./ConnectOptions";
import { useMutation } from "@apollo/react-hooks";
import { addRequestMutation } from "./mutations";
import Confirmation from "./ConfirmationPopup";
import ErrorMessage from "../../shared/ErrorMessage";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

import * as Styled from "./styled";

export default () => {
  const [formValues, setFormValues] = useState({ served: false });
  const [formTouched, setFormTouched] = useState({
    name: false,
    phone: false,
    comment: false,
  });
  const [addRequest] = useMutation(addRequestMutation);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [wrongPhone, setWrongPhone] = useState(false);

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

  const handlePhoneChange = async (e) => {
    setFormTouched({
      ...formTouched,
      [e.target.name]: true,
    });
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    e.target.value.length === 13 
    && (/^((\+375)+((29)|(33)|(44)|(25))+([0-9]){7})$/gm.test(e.target.value))
      ? setWrongPhone(false)
      : setWrongPhone(true);
  };

  const handleradioChange = (e) => {
    setFormValues({
      ...formValues,
      connectBy: e.target.value,
    });
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRequest({
      variables: {
        name: formValues.name,
        phone: formValues.phone,
        comment: formValues.comment,
        connectBy: formValues.connectBy,
        served: false,
      },
    });
    setFormValues({ served: false });
    setFormTouched({ 
      name: false,
      phone: false,
      comment: false,
     })
    setShowMessage(true);
  };

  const setMessage = (connectOption) => {
    let message = "";
    switch (connectOption) {
      case "viber":
        message = "Скоро мы напишем Вам в Viber.";
        break;
      case "telegram":
        message = "Скоро мы напишем Вам в Telegram.";
        break;
      case "whatsapp":
        message = "Скоро мы напишем Вам в WhatsApp.";
        break;
      default:
        message = "Скоро мы позвоним Вам.";
    }
    setMessageText(message);
  };

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Motto h1>Остались вопросы?</Styled.Motto>
        <Styled.Motto>
          Напишите нам, и мы свяжется с Вами в течение 15 минут.
        </Styled.Motto>
        <Styled.Form>
          <Styled.InputWrapper>
            <Styled.Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              onChange={handleInputChange}
              value={formValues.name || ""}
              error={!formValues.name && formTouched.name}
            />
            <ErrorMessage
              error={!formValues.name && formTouched.name}
              errorMessage="Пожалуйста, укажите Ваше имя"
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.Input
              type="tel"
              name="phone"
              placeholder="Ваш номер телефона"
              onChange={handlePhoneChange}
              value={formValues.phone || ""}
              error={(!formValues.phone && formTouched.phone) || wrongPhone}
            />
            <ErrorMessage
              error={(!formValues.phone && formTouched.phone) || wrongPhone}
              errorMessage={wrongPhone ? "Номер не соответствует формату +375 ХХ ХХХХХХХ" : "Пожалуйста, укажите номер телефона"}
            />
          </Styled.InputWrapper>
          <ConnectOptions
            changedRadio={handleradioChange}
            defaultValue={"call"}
          />
          <Styled.InputWrapper>
            <Styled.TextArea
              type="text"
              name="comment"
              placeholder="Ваш комментарий"
              onChange={handleInputChange}
              value={formValues.comment || ""}
              error={!formValues.comment && formTouched.comment}
            />
            <ErrorMessage
              error={!formValues.comment && formTouched.comment}
              errorMessage="Пожалуйста, оставьте комментарий"
            />
          </Styled.InputWrapper>
          <Button
            type="submit"
            clicked={handleSubmit}
            disabled={
              !formValues.name || !formValues.phone || !formValues.comment
            }
          >
            Отправить
          </Button>
        </Styled.Form>
      </Styled.Container>
      <Footer />
      <Confirmation
        showMessage={showMessage}
        message={`Ваш комментарий принят. ${messageText}`}
      />
    </>
  );
};
