import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Contact() {
  return (
   <>
   <Header displaySearchBar={false}/>
   <div>
   <center>
   <h1>Contact Form</h1>
      <div id="container">
      <div id="main">

          <form  className="newForm">
            <label htmlFor="firstName" id="label-name">
              Frist Name
            </label>
            <input
              type="name"
              id="firstName"
             
              name='firstName'
            />
            <label htmlFor="lastName" id="label-name">
              Last Name
            </label>
            <input
              type="name"
              id="lastName"
             

              name='lastName'
            />

            <label htmlFor="email" id="label-email">
              Email
            </label>
            <input type="email" id="email" name='email'  />
            <label htmlFor="text">Your Query</label>
            <input type="text" id='text' name='text' />
            
            <button id="btn">Submit</button>
          </form>
        
      </div>
    
      </div>
      {/* </div> */}
      </center>
    
    </div>
    <Footer/>   
    </>
   
  )
}

export default Contact