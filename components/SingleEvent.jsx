import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Notification from './Notification';
import { IconChat, IconBell, IconSettings } from './icon';
import { MESSAGES } from '../constants';

function SingleEvent({ image, title, description }) {
  const [emailValue, setEmailValue] = useState('');
  const [notification, setNotification] = useState(null);
  const router = useRouter();

  const onChange = e => setEmailValue(e.target.value);

  const handleNotificationClose = e => {
    e.preventDefault();
    setNotification(null);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const eventValue = router?.query.event;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailValue)
      return setNotification({
        message: MESSAGES.error.emailEmpty,
        icon: <IconBell />,
        className: 'notification-warning',
      });

    if (!emailValue.match(emailRegex))
      return setNotification({
        message: MESSAGES.error.emailInvalid,
        icon: <IconBell />,
        className: 'notification-warning',
      });

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId: eventValue }),
      });

      const data = await response.json();

      if (!response.ok) {
        setNotification({
          message: `${response.statusText}: ${data.message}`,
          icon: <IconSettings />,
          className: 'notification-error',
        });

        throw new Error(`${response.statusText} [${response.status}]`);
      }

      setNotification({
        message: data.message,
        icon: <IconChat />,
        className: 'notification-info',
      });

      setEmailValue('');
    } catch (error) {
      console.error(error);
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
          {MESSAGES.info.form.label}
        </label>
        <input
          className="single-event__registration-field"
          type="email"
          id="emailRegistration"
          placeholder="email@sample"
          value={emailValue}
          onChange={onChange}
        />
        <button className="single-event__registration-button" type="submit">
          {MESSAGES.info.form.button}
        </button>
      </form>
      {notification && (
        <Notification
          message={notification.message}
          icon={notification.icon}
          classNames={notification.className}
          onClose={handleNotificationClose}
        />
      )}
    </article>
  );
}

export default SingleEvent;
