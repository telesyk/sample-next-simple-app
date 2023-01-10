import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')
  const paths = events_categories.map(event => {
    return {
      params: {
        category: event.id,
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')
  const id = context?.params.category
  const data = allEvents.filter(event => event.city === id)

  return {
    props: {
      events: data,
      categoryName: id.charAt(0).toUpperCase() + id.substring(1),
    }
  }
}

const EventCategoryPage = ({events, categoryName}) => {
  return (
    <section>
      <h1>Page for all events in {categoryName}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt rerum aliquid aperiam est officia provident, incidunt accusantium ipsa voluptatem, suscipit expedita placeat. Dignissimos tenetur molestias fugit laborum, veritatis quis tempore?</p>
      {events.map(event => (
        <Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref legacyBehavior>
          <a>
            <Image src={event.image} alt={event.title} width={200} height={200} />
            <h2>{event.title}</h2>
            <p><em>{event.description}</em></p>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default EventCategoryPage