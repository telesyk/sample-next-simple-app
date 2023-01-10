import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')

  return {
    props: {
      events: events_categories,
    }
  }
}

const EventsPage = ({events}) => {
  return (
    <section>
      <h1>Page for all events</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt rerum aliquid aperiam est officia provident, incidunt accusantium ipsa voluptatem, suscipit expedita placeat. Dignissimos tenetur molestias fugit laborum, veritatis quis tempore?</p>
      
      {events.map(event => (
        <Link key={event.id} href={`/events/${event.id}`} title={event.title} passHref legacyBehavior>
          <a>
            <Image src={event.image} alt={event.title} width='150' height='150' loading='lazy' />
            <h2>{event.title}</h2>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default EventsPage