import styled from "styled-components";
import * as yup from "yup";
import { useState, useEffect } from "react";

const StyledFormContainer = styled.div``;

const ContactForm = () => {
    
    const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your name").min(2), 
    email: yup.string().email().required("Please enter your email"),
    textarea: yup.string().required("Invalid message length").min(2)
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
    formSchema.isValid(formState).then(valid => {
      console.log(valid)
        setSubmitButtonDisabled(!valid);
    });
  }, [formState]);

    const validateChange = (event) => {
    yup.reach(formSchema, event.target.name).validate(event.target.value)
    .then(valid => {
        setValidationErrors({
            ...validationErrors,
            [event.target.name]: ""
        });
    }).catch((error) => {
        console.log(error)
        setValidationErrors({
            ...validationErrors,
            [event.target.name]: error.message
        })
    })
}
  
  const handleInputChange = (event) => {
    event.persist();
    const validateChangeState = {
        ...formState,
        [event.target.name]: event.target.value
        
    };
       validateChange(event);
       setFormState(validateChangeState);
       console.log(event.target.value);
    };
  
    const submitPostRequest =  (event) => {
        event.preventDefault();
        console.log('submitted');
    };
    
  return (
    <StyledFormContainer>
        <form onSubmit={submitPostRequest}>
            <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={formState.name} 
                onChange={handleInputChange} />
                            {validationErrors.name.length > 0 ? <p> {validationErrors.name}</p> : null}
        </form>
    </StyledFormContainer>
  );
};

export default ContactForm






// const ContactForm = () => {
 
// const formSchema = yup.object().shape({
//     name: yup.string().required("Please enter your name").min(2), 
//     email: yup.string().email().required("Please enter your email"),
//     textarea: yup.string.required("Invalid message length").min(2)
// });

// const [formState, setFormState] = useState({
//     name: "", 
//     email: "",
//     textarea: "",
// });

// const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

// const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     textarea: "",
//   });

// useEffect(() => {
//     formSchema.isValid(formState).then(valid => {
//       console.log(valid)
//         setSubmitButtonDisabled(!valid);
//     });
//   }, [formState]);

//   const validateChange = (event) => {
//     yup.reach(formSchema, event.target.name).validate(event.target.value)
//     .then(valid => {
//         setValidationErrors({
//             ...validationErrors,
//             [event.target.name]: ""
//         });
//     }).catch((error) => {
//         console.log(error)
//         setValidationErrors({
//             ...validationErrors,
//             [event.target.name]: error.message
//         })
//     })
// }
  
//   const handleInputChange = (event) => {
//     event.persist();
//     const validateChangeState = {
//         ...formState,
//         [event.target.name]: event.target.value
        
//     };
//        validateChange(event);
//        setFormState(validateChangeState);
//        console.log(event.target.value);
//     };
  
//     const submitPostRequest =  (event) => {
//         event.preventDefault();
//         console.log('submitted');
//     };

//   return (
//     <StyledFormContainer>
//         <form onSubmit={submitPostRequest}>
//             <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" id="name" value={formState.name} 
//                 onChange={handleInputChange} />
//                             {validationErrors.name.length > 0 ? <p> {validationErrors.name}</p> : null}
//         </form>
//     </StyledFormContainer>
//   );
// };

// export default ContactForm;


