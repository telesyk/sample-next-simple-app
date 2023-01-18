import React, { useState } from 'react'
import Image from 'next/image'

const captions = {
  form: {
    label: 'Please, register for this event',
    button: 'Submit',
  }
}

function SingleEvent({image, title, description}) {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  }

  return (
    <article className='single-event'>
      <h1 className='single-event__title'>{title}</h1>
      <Image className='single-event__image' src={image} width={500} height={500} alt={title} />
      <p className='single-event__description'>{description}</p>
      
      <form onSubmit={onSubmit} className="single-event__registration">
        <label className="single-event__registration-label" htmlFor="emailRegistration">{captions.form.label}</label>
        <input
          className="single-event__registration-field"
          type="email"
          id='emailRegistration'
          placeholder="email@sample"
          value={value}
          onChange={onChange}
        />
        <button className="single-event__registration-button" type='submit'>{captions.form.button}</button>
      </form>
    </article>
  )
}

export default SingleEvent
