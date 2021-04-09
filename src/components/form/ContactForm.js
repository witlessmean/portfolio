import * as yup from "yup";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import styled from "styled-components";
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from '@material-ui/icons/Send';
import { StyledHR, formStyles, theme } from "../../utils/reuseableStyles";

const StyledFormContainer = styled.div`
  text-align: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledValidationError = styled.p`
  color: red;
  font-weight: bolder;
`;

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
      console.log("is it valid?", valid);
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
    console.log(formState)
  };

  const submitPostRequest = (event) => {
    event.preventDefault();
    console.log("submitted");
    db.collection("contacts")
      .add({
        name: formState.name,
        email: formState.email,
        textarea: formState.textarea,
      })
      .then(() => {
        alert("Message sent, Thank you!");
      })
      .catch((error) => {
        alert(error.message);
      });
      setFormState({
        name: "",
        email: "",
        textarea: "",
      })
  };

  return (
    <StyledFormContainer>
      <ThemeProvider theme={theme}>
      <h2>Contact</h2>
      <StyledHR />
      <StyledForm onSubmit={submitPostRequest}>
        <TextField
          name="name"
          id="name"
          label="name:"
          onChange={handleInputChange}
          value={formState.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon style={formStyles.iconStyles} />
              </InputAdornment>
            ),
      }}
        />
        {validationErrors.name.length > 0 ? (
          <StyledValidationError>
            {" "}
            {validationErrors.name}
          </StyledValidationError>
        ) : null}
        <TextField
          name="email"
          id="email"
          label="email:"
          onChange={handleInputChange}
          value={formState.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <EmailIcon style={formStyles.iconStyles} />
              </InputAdornment>
            ),
          }}
        />
        {validationErrors.name.length > 0 ? (
          <StyledValidationError>
            {" "}
            {validationErrors.email}
          </StyledValidationError>
        ) : null}
        <label htmlFor="textarea"></label>
        <TextField
          name="textarea"
          id="textarea"
          label="message"
          multiline
          rows={6}
          variant="outlined"
          onChange={handleInputChange}
          value={formState.textarea}
          style={{ width: "25rem", margin: "1.8vh" }}
          inputProps={formStyles.inputStyles}
        />
        {validationErrors.name.length > 0 ? (
          <StyledValidationError>
            {" "}
            {validationErrors.textarea}
          </StyledValidationError>
        ) : null}
        <Button variant="outlined" type="submit" disabled={submitButtonDisabled}>send 
        <SendIcon />
        </Button>
      </StyledForm>
    </ThemeProvider>
    </StyledFormContainer>
  );
};

export default ContactForm;

