import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function EventItem({id, linkHref, title, image, description, imageSize}) {
  const defaultImage = !imageSize ? 250 : imageSize;

  return (
    <Link key={id} href={linkHref} title={title} className='event__item'>
      <Image
        src={image}
        alt={title}
        loading='lazy'
        width={defaultImage}
        height={defaultImage}
        className='event__item-image'
      />
      <h2 className='event__item-title'>{title}</h2>
      <p className='event__item-description'>{!description ?  '' : description}</p>
    </Link>
  )
}

export default EventItem