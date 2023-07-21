import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms/StyledButton/StyledButton";
import { Header } from "../../atoms/HeaderText/HeaderText";

const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: 80px auto 0;
  position: absolute;
`;

const FormWrapper = styled.div`
  background-color: #3f3f3f14;
  border-radius: 20px;
  box-sizing: border-box;
  /* height: 100vh; */
  padding: 0 20px;
  width: 100%;
  margin: 40px auto;

  @media (min-width: 360px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1200px) {
    /* height: 30vh; */
    /* background-color: teal; */
  }

  form {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    @media (min-width: 1200px) {
      /* height: 70vh; */
      /* background-color: teal; */
    }
  }
`;

const Input = styled.input`
  background-color: #ffffff15;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;

  &::placeholder {
    color: #ffffff15;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  &:focus ~ label {
    transform: translateY(-30px) translateX(10px) scale(0.75);
    color: #b700ff;
  }

  &:not(:placeholder-shown) ~ label {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  &:focus ~ div {
    transform: translateY(8px);
  }
  &:not(:placeholder-shown) ~ div {
    transform: translateY(8px);
  }

  /* &:placeholder {
      color: #65657b;
      font-family: sans-serif;
      left: 20px;
      line-height: 14px;
      pointer-events: none;
      position: absolute;
      transform-origin: 0 50%;
      transition: transform 200ms, color 200ms;
      top: 20px;
    } */
`;
const InputContainer = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
  margin: 15px 0;

  label {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  textarea {
    background-color: #ffffff15;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 90px;
    min-width: 100%;
    outline: 0;
    padding: 20px;
    max-width: 100%;
    overflow-y: hidden;

    &::placeholder {
      color: #ffffff15;
      font-family: sans-serif;
      left: 20px;
      line-height: 14px;
      pointer-events: none;
      position: absolute;
      transform-origin: 0 50%;
      transition: transform 200ms, color 200ms;
      top: 20px;
    }

    &:focus ~ label {
      transform: translateY(-30px) translateX(10px) scale(0.75);
      color: #b700ff;
    }

    &:focus ~ div {
      transform: translateY(8px);
    }
  }
`;

const Placeholder = styled.label`
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 120px;
  margin: 30px auto 0;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const Cut = styled.div`
  background-color: #050505;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
`;

const ErrorContainer = styled.div`
  margin: 20px 0;
`;

//////////

// const ContactContainer = styled.section`
//   width: 100vw;
//   /* height: 100vh; */
//   margin: 90px 0 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow-x: hidden;

//   @media (min-width: 810px) {
//     height: 100vh;
//     margin: 0;
//     overflow-x: auto;
//   }

//   .card {
//     width: 90%;
//     padding: 30px 90px 90px 90px;
//     border: 6px solid rgba(126, 26, 208, 0.988);
//     box-shadow: 10px 10px 0 rgba(126, 26, 208, 0.497);
//     border-radius: 50px;
//     position: relative;

//     @media (min-width: 810px) {
//         width: 70%;
//         box-shadow: 20px 20px 0 rgba(126, 26, 208, 0.497);
//     }
//   }

//   .card h2 {
//     color: rgba(126, 26, 208, 0.497));
//     font-size: 60px;
//     text-transform: uppercase;
//   }

//   .card .row {
//     position: relative;
//     width: 100%;
//     display: grid;
//     grid: auto / auto auto;
//     grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
//     grid-gap: 30px;
//   }

//   .card .row .col {
//     position: relative;
//     width: 100%;
//     margin: 20px 10px 20px 0;
//     transition: 0.5s;

//     @media (min-width: 810px) {
//         margin: 30px 20px 40px 0;
//     }

//   }

//   .card .row .col .form-group textarea {
//     padding: 0;
//   }

//   .card .row .form-group {
//     position: relative;
//     width: 100%;
//     height: 40px;
//     color: #ffffff;

//   }

//   .card .row .form-group input,
//   .card .row .form-group textarea {
//     position: absolute;
//     width: 90%;
//     height: 100%;
//     background: transparent;
//     outline: none;
//     font-size: 20px;
//     padding: 10px 0 10px 20px;
//     border: 5px solid rgba(126, 26, 208, 0.306);
//     box-shadow: 10px 10px 0 rgba(126, 26, 208, 0.306);
//     color: #ffffff;
//     border-radius: 50px;
//   }

//   .card .row .form-group label {
//     line-height: 40px;
//     color: #ffffff;
//     font-size: 20px;
//     margin: 0 0 0 30px;
//     display: block;
//     pointer-events: none;
//   }

//   .row .col:nth-child(6) {
//     margin-top: 64px;
//   }

//   .card .row .form-group input:focus,
//   .card .row .form-group textarea:focus {
//     border: 5px solid #ffffff;
//     transition: all 0.5s;
//   }

//   .card .row input[type="submit"] {
//     border: 5px solid rgba(126, 26, 208, 0.306);
//     box-shadow: 10px 10px 0 rgba(126, 26, 208, 0.306);
//     padding: 10px;
//     height: 100%;
//     width: 50%;
//     cursor: pointer;
//     outline: none;
//     background: transparent;
//     text-transform: uppercase;
//     color: #ffffff;
//     line-height: 40px;
//     font-size: 24px;
//     font-weight: 700;
//     border-radius: 45px;
//     transition: all 0.4s;
//   }

//   .card .row input[type="submit"]:hover {
//     border: 5px solid rgba(255, 255, 255, 1);
//     color: #ffffff;
//     transition: all 0.4s;
//   }

//   @media screen and (max-width: 900px) {
//     .card .row {
//       grid-template-columns: repeat(auto-fit, minmax(70%, 1fr));
//     }

//     .card {
//       padding: 20px;
//     }

//     .card h2 {
//       font-size: 34px;
//     }

//     .card .row input[type="submit"] {
//       width: 100%;
//     }
//   }
// `;

// const Contact = () => {
//   return (
//     <ContactContainer>
//       <div className="card">
//         <h2>Contact Us</h2>
//         <div className="row">
//           <div className="col">
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" />
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Surname</label>
//               <input type="text" />
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Email</label>
//               <input type="text" />
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Phone</label>
//               <input type="text" />
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Message</label>
//               <textarea></textarea>
//             </div>
//           </div>

//           <div className="col">
//             <input type="submit" value="Submit" />
//           </div>
//         </div>
//       </div>
//     </ContactContainer>
//   );
// };

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData) => {
    console.log(formData);
    emailjs
      .send(
        "service_pujr1m5",
        "template_dql7x43",
        formData,
        "MzaeL-pV-eLoX1irr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <SectionContainer>
      <Header>CONTACT</Header>
      <FormWrapper>
        <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
          <InputContainer>
            {/* <Cut /> */}
            <Input name="name" {...register("name")} placeholder=" " />
            <Cut />
            <label for="name">Name</label>
          </InputContainer>
          <InputContainer>
            {/* <Cut /> */}
            <Input
              type="email"
              name="email"
              {...register("email")}
              placeholder=" "
            />
            <Cut />
            <label for="email">Email</label>
          </InputContainer>
          <InputContainer>
            <textarea
              id="message"
              rows="3"
              placeholder=" "
              name="message"
              {...register("message", { required: true })}
            ></textarea>
            <Cut />
            <label for="message">Message</label>
          </InputContainer>
          <div>
            <ButtonContainer>
              <Button type="submit" value="SEND MESSAGE">
                Send
              </Button>
            </ButtonContainer>
          </div>
          {errors.message && (
            <ErrorContainer style={{ color: "red" }}>
              Uzupełnij wszystkie pola
            </ErrorContainer>
          )}
        </form>
      </FormWrapper>
    </SectionContainer>
  );
};

export default Contact;
