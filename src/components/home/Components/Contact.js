import React from 'react'

const Contact = () => {
  return (
    <div className='container contact'>
      <h2>Contacto</h2>
      <form>
        <div>
          <label id='nombre'>Nombre</label>
          <input name='input' type='input'></input>
        </div>
        <div>
          <label id='nombre'>Email</label>
          <input name='input' type='email'></input>
        </div>
        <div>
          <label id='nombre'>En que puedo ayudarte</label>
          <input name='input' type='textarea'></input>
        </div>
        
      </form>
    </div>
  )
}

export default Contact;