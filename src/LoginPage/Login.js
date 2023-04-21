import React from 'react';

import { Formik } from 'formik';
import './login.css'
import { useNavigate } from 'react-router-dom';


const Login=()=>{

  const navigate=useNavigate()

    return(
       

        <div className="loginPage">



<Formik

  initialValues={{ email: '', password: '' }}

  validate={values => {

    const errors = {};

    if (!values.email) {

      errors.email = 'Required';

    } else if (

      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

    ) {

      errors.email = 'Invalid email address';

    }

    return errors;

  }}

  onSubmit={(values, { setSubmitting }) => {

    setTimeout(() => {

      console.log("234",values)

      if(values.email==="Pranav@gmail.com" && values.password==="123"){

           alert("login successfull")

           navigate('/')

          
      }


      else{

        alert("login failed")

        navigate('/login')
      }



      

      setSubmitting(false);

    }, 400);

  }}

>

  {({

    values,

    errors,

    touched,

    handleChange,

    handleBlur,

    handleSubmit,

    isSubmitting,

    /* and other goodies */

  }) => (

  

    <form onSubmit={handleSubmit} className="form-container">
        <h3 className='mt-5 mb-5'>Login Form</h3>
  <div className="form-group">
    <label htmlFor="email" className="form-label">Email</label> <br></br>
    <input
      type="email"
      id="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      className={errors.email && touched.email ? "form-input error" : "form-input"}
      placeholder="Enter your email"
    />
    <br></br>
    {errors.email && touched.email && <div className="error-message">{errors.email}</div>}
  </div>
  <br></br>
  <div className="form-group">
    <label htmlFor="password" className="form-label">Password</label> <br></br>
    <input
      type="password"
      id="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      className={errors.password && touched.password ? "form-input error" : "form-input"}
      placeholder="Enter your password"
    />
    <br></br>
    {errors.password && touched.password && <div className="error-message">{errors.password}</div>}
  </div>
  <br></br>
  <button type="submit" disabled={isSubmitting} className="form-button">
    {isSubmitting ? "Submitting..." : "Submit"}
  </button>
  <br></br>
</form>

  )}

</Formik>

</div>






       
     
    )

}


export default Login