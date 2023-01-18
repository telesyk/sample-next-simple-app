import React from 'react'
import Image from 'next/image'

function SingleEvent({image, title, description}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <article className='single-event'>
      <h1 className='single-event__title'>{title}</h1>
      <Image className='single-event__image' src={image} width={500} height={500} alt={title} />
      <p className='single-event__description'>{description}</p>
      
      <form onSubmit={handleSubmit} className="single-event__registration">
        <label className="single-event__registration-label" htmlFor="emailRegistration">Register for this event</label>
        <input className="single-event__registration-field" type="email" id='emailRegistration' placeholder="email@sample" />
        <button className="single-event__registration-button" type='submit'>Register</button>
      </form>
    </article>
  )
}

export default SingleEvent
