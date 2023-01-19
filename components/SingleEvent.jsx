import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const captions = {
  form: {
    label: 'Please, register for this event',
    button: 'Submit',
  },
};

function SingleEvent({ image, title, description }) {
  const [value, setValue] = useState('');
  const router = useRouter();

  const onChange = e => setValue(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();
    const eventValue = router?.query.event;

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: value, event: eventValue }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="single-event">
      <h1 className="single-event__title">{title}</h1>
      <Image
        className="single-event__image"
        src={image}
        width={500}
        height={500}
        alt={title}
      />
      <p className="single-event__description">{description}</p>

      <form onSubmit={onSubmit} className="single-event__registration">
        <label
          className="single-event__registration-label"
          htmlFor="emailRegistration"
        >
          {captions.form.label}
        </label>
        <input
          className="single-event__registration-field"
          type="email"
          id="emailRegistration"
          placeholder="email@sample"
          value={value}
          onChange={onChange}
        />
        <button className="single-event__registration-button" type="submit">
          {captions.form.button}
        </button>
      </form>
    </article>
  );
}

export default SingleEvent;
