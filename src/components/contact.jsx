import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        'service_3sc429o', 'template_4v54o1l', e.target, 'rJh_OA8S9D7D7-CVw'
      )
      .then(
        (result) => {
          console.log('Correo enviado:', result.text);
          alert('¡Mensaje enviado con éxito!');
          clearState();
        },
        (error) => {
          console.error('Error al enviar el mensaje:', error.text);
          alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
        }
      );
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contactanos</h2>
                <p>
                Por favor, rellene el siguiente formulario para enviarnos un correo electrónico y nos pondremos en contacto con usted lo antes posible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type="text"
                        id="name"
                        name="name" // Coincide con {{from_name}} en el template
                        className="form-control"
                        placeholder="Nombre"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type="email"
                        id="email"
                        name="email" // Coincide con {{reply_to}} en el template
                        className="form-control"
                        placeholder="Correo Electrónico"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name="message" // Coincide con {{message}} en el template
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            {/*
            <div className='contact-item'>
              <h3>Informacion de Contacto</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefono
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            */}
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  {/*
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                  
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
