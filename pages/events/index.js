import React from 'react';
import PageHead from '../../components/PageHead';
import EventItem from '../../components/EventItem';

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      events: events_categories,
    },
  };
}

const EventsPage = ({ events }) => {
  return (
    <>
      <PageHead />
      <section className="page__section">
        <h1 className="page__title">
          Page for all events in cities ({events.length})
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          rerum aliquid aperiam est officia provident, incidunt accusantium ipsa
          voluptatem, suscipit expedita placeat. Dignissimos tenetur molestias
          fugit laborum, veritatis quis tempore?
        </p>

        <div className="event__categories">
          {events.map(event => (
            <EventItem
              key={event.id}
              id={event.id}
              linkHref={`/events/${event.id}`}
              title={event.title}
              image={event.image}
              imageSize={150}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventsPage;
