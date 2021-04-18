import React from 'react'
import  "./Contact.css";
import Form from  'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import Particles from "react-particles-js";



  const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

      emailjs.sendForm('gmail', 'template_8y1q8t8', e.target, 'user_7Wugx3k9EPq8LzMM0Gvrx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
      <div className="contact-section" id="contact">
        <Particles
        className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "square",
                stroke:{
                width: 6,
                color: "#ff75a0"
                }
              }
            }
           }}
          />
        <div className="form-section-content" >
         <h1> Contact Me!</h1>
           <Form className="form-section" onSubmit={sendEmail}>
             <Form.Group>
               <Form.Label htmlFor="full-name">Full Name</Form.Label>
               <Form.Control  id="full-name" name="name" type="text"  />
             </Form.Group>
             <Form.Group>
               <Form.Label htmlFor="email">Email</Form.Label>
               <Form.Control id="email" name="email" type="email"  />
             </Form.Group>
             <Form.Group>
               <Form.Label htmlFor="message">Your Message</Form.Label>
               <Form.Control id="message" name="message" as="textarea"  row ="3" />
             </Form.Group>
             <Button className="btn-center" variant="primary" type="submit"  >
               Send
             </Button>
           </Form>
          </div>
      </div>
     )
   }


export default Contact;

