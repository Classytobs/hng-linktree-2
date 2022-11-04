import React, { useState,useEffect }  from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'

export default function Contact() {
    const name = 'Engr_tobs'

    const [formValues, setFormValues] = useState ({firstname:'',lastname:'',email:'',message:''})
    const [formErrors, setFormErrors] = useState ({}) 
    const [submit, setSubmit] = useState (false)

    useEffect(() => {
        console.log(formErrors)
        if((Object.keys(formErrors).length) === 0 && submit) {
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {}; 

        if (!values.firstname) {
            errors.firstname = 'Enter your first name'
        } 
         if (!values.lastname) {
            errors.lastname = 'Enter your last name'
        } 
         if (!values.email) {
            errors.email = 'Enter your email'
        } 
         if (!values.message) {
            errors.message = 'Please write a message'
        } 
     return errors;   
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setSubmit(true)
    }

    
  return (

    ((Object.keys(formErrors).length) === 0 && submit)? alert('sent') : 
    <>
    <div className='contactpage'>
        <div className='contactcontainer'>
            <div className='contactcontent'>
                <div className='contenthead'>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <div className='contentbody'>
                        <form onSubmit={handleSubmit}>
                            <div className='formfield'>
                                <div className='fieldname'>
                                    <div className='fieldfirst'>
                                        <label htmlFor='firstname'>First Name</label>
                                       <input id='first__name' type='text' name='firstname'
                                        value={formValues.firstname}
                                        onChange={handleChange}
                                        placeholder='Enter your first name'/>
                                       <span className='efirstname' >{formErrors.firstname}</span>
                                    </div>
                                    
                                    <div className='fieldlast'>
                                        <label htmlFor='lastname'>Last Name</label>
                                        <input id='last__name' type='text' name='lastname'
                                        placeholder='Enter your last name'
                                        value={formValues.lastname}
                                        onChange={handleChange} />
                                        <span className='elastname' >{formErrors.lastname}</span>
                                    </div>  
                                </div>

                                <div className='fieldemail'>
                                    <label htmlFor='email'>Email</label>
                                    <input id='email' type='email' name='email' 
                                    placeholder='yourname@email.com'
                                    value={formValues.email}
                                        onChange={handleChange}/>
                                    <span className='eremail' >{formErrors.email}</span>
                                </div>

                                <div className='fieldmessage'>
                                    <label htmlFor='message'>Message</label>
                                    <textarea id='message' name='message' 
                                    placeholder='Send me a message and I will reply you as soon as possible...'
                                    value={formValues.message}
                                        onChange={handleChange}/>
                                    <span className='emessage' >{formErrors.message}</span>
                                </div>

                                 <div className='fieldterms'>
                                    <input type='checkbox' name='terms' id='checkbox'/>
                                    <label htmlFor='terms'> You agree to providing your data to {name} who may contact you</label>
                                 </div> 
                                 <button type='submit' id='btn__submit' name='sendmessage'>Send Message</button>
                            </div>
                            
                                
                        </form>
                </div>
            </div>
        </div>
    </div>
     <Footer />
     </>
  )
}
