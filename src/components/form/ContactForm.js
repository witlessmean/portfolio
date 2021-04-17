import * as yup from "yup";
import { useState, useEffect, useContext } from "react";
import { db } from "./firebase";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import { StyledHR, formStyles } from "../../utils/reuseableStyles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ModeContext } from "../navigation/darkMode/ModeContext";

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
  };

  const submitPostRequest = (event) => {
    event.preventDefault();
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
    });
  };

  const { mode } = useContext(ModeContext);

  const theme = createMuiTheme({
    overrides: {
      MuiInput: {
        root: {
          fontSize: "2rem",
          margin: "2vh 0",
          fontWeight: "800",
        },
      },
      MuiButton: {
        root: {
          fontSize: "1.6rem",
          fontWeight: "bolder",
          "&:hover": {
            boxShadow: "0 0 0 0.2rem rgba(0,120,255,.8)",
          },
        },
      },
    },
    props: {
      MuiInputLabel: {
        style: { fontSize: "2.5rem", fontWeight: "900" },
      },
      MuiTextField: {
        style: { fontSize: "2.5rem" },
      },
    },

    palette: {
      type: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledFormContainer>
        <StyledHR style={{ visibility: "hidden" }} />
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
          <Button
            variant="outlined"
            type="submit"
            disabled={submitButtonDisabled}
          >
            send
            <SendIcon />
          </Button>
        </StyledForm>
      </StyledFormContainer>
    </ThemeProvider>
  );
};

export default ContactForm;
