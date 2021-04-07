import styled from "styled-components";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { db } from "./firebase";

const StyledFormContainer = styled.div``;

const StyledValidationError = styled.p`
color: red;`

const ContactForm = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(2),
    email: yup.string().email().required("Please enter your email"),
    textarea: yup.string().required("Invalid message length").min(2),
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setSubmitButtonDisabled(!valid);
      console.log("is it valid?", valid)
    });
  }, [formState, formSchema]);

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setValidationErrors({
          ...validationErrors,
          [event.target.name]: "",
        });
      })
      .catch((error) => {
        //console.log(error);
        setValidationErrors({
          ...validationErrors,
          [event.target.name]: error.message,
        });
      });
  };

  const handleInputChange = (event) => {
    event.persist();
    const validateChangeState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    validateChange(event);
    setFormState(validateChangeState);
    //console.log(event.target.value);
  };

  const submitPostRequest = (event) => {
    event.preventDefault();
    console.log("submitted");
    db.collection('contacts').add({

        name: formState.name,
        email: formState.email,
        textarea: formState.textarea,

    }).then(() => {
        alert("Message has been submitted")
    }).catch((error) => {
      alert(error.message)
    });

    // setFormState({
    //     name: "",
    //     email: "",
    //     textarea: "",
    //});

  };

  return (
    <StyledFormContainer>
      <form onSubmit={submitPostRequest}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        {validationErrors.name.length > 0 ? (
          <StyledValidationError> {validationErrors.name}</StyledValidationError>
        ) : null}
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={formState.email} onChange={handleInputChange} />
        {validationErrors.name.length > 0 ? (
          <StyledValidationError> {validationErrors.email}</StyledValidationError>
        ) : null}
        <label htmlFor="textarea">Your Message:</label>
        <textarea type="text" name="textarea" id="textarea" value={formState.textarea} onChange={handleInputChange} />
        {validationErrors.name.length > 0 ? (
          <StyledValidationError> {validationErrors.textarea}</StyledValidationError>
        ) : null}
        <input type="submit" disabled={submitButtonDisabled} />
      </form>
    </StyledFormContainer>
  );
};

export default ContactForm;

//dont show errors unless submitted. get rid of 2 error. make errors red. 
