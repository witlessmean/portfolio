import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledFormContainer = styled.div``



const ContactForm = () => {
   
    const { register, handleSubmit, errors } = useForm();
   
    const onSubmit = (data) => {
        console.log(data)
      }

    return (
        <StyledFormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input {...register("name")} id="name" />
                <input type="submit" />
            </form>
        </StyledFormContainer>
    )
}

export default ContactForm
