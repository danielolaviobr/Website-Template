import React, { useState, useCallback } from "react";
import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErrors";

import { Container, TextInput, Button, ContentWrapper } from "./styles";
import { useToast } from "../../hooks/toast";

const Contact: React.FC = () => {
  const [fieldFocus, setFieldFocus] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { addToast } = useToast();

  const handleUserFocus = useCallback(() => {
    setFieldFocus(true);
  }, []);

  const handleUserBlur = useCallback(() => {
    setFieldFocus(false);
  }, []);

  const handleEmailChange = useCallback((event) => {
    const email = event.target.value;
    setUserEmail(email);
  }, []);

  const handleUserSubmit = useCallback(async () => {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("Insert a valid e-mail")
        .required("Please insert an e-mail"),
    });

    try {
      await schema.validate({ email: userEmail });
      addToast({ message: "The e-mail has been registered" });
      // TODO send to back-end

      addToast({ message: "Please check your inbox" });
      setUserEmail("");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err);
        addToast({ message: validationErrors.message });
      }
    }
  }, [userEmail, addToast]);

  return (
    <ContentWrapper>
      <Container fieldFocus={fieldFocus}>
        <TextInput
          placeholder="E-mail"
          onFocus={handleUserFocus}
          onBlur={handleUserBlur}
          onChange={handleEmailChange}
          value={userEmail}
        />
        <Button onClick={handleUserSubmit}>
          <span>Contact me</span>
        </Button>
      </Container>
    </ContentWrapper>
  );
};

export default Contact;
