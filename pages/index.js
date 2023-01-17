import EventItem from '../components/EventItem'
import PageHead from '../components/PageHead'

export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json')

  return {
    props: {
      pageTitle: 'Home Page Title!',
      events: events_categories,
    }
  }
}

export default function Home({events, pageTitle}) {
  return (
    <>
      <PageHead pageTitle={pageTitle} />
      <section className='page__section'>
        <h1 className='page__title'>{pageTitle}</h1>

        <div className='event__list'>
          {events.map(event => (
            <EventItem
              key={event.id}
              id={event.id}
              linkHref={`/events/${event.id}`}
              title={event.title}
              image={event.image}
              description={event.description}
              imageSize={150}
            />
          ))}
        </div>
      </section>
    </>
  )
}
