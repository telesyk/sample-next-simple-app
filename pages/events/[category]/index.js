import React from 'react';
import PageHead from '../../../components/PageHead';
import EventItem from '../../../components/EventItem';

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const paths = events_categories.map(event => {
    return {
      params: {
        category: event.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { all_events } = await import('/data/data.json');
  const id = context?.params.category;
  const data = all_events.filter(event => event.city === id);

  return {
    props: {
      events: data,
      categoryName: id.charAt(0).toUpperCase() + id.substring(1),
    },
  };
}

const EventCategoryPage = ({ events, categoryName }) => {
  return (
    <>
      <PageHead />
      <section className="page__section">
        <h1 className="page__title">
          Page for all events ({events.length}) in {categoryName}
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          rerum aliquid aperiam est officia provident, incidunt accusantium ipsa
          voluptatem, suscipit expedita placeat. Dignissimos tenetur molestias
          fugit laborum, veritatis quis tempore?
        </p>

        <div className="event__list">
          {events.map(event => (
            <EventItem
              key={event.id}
              id={event.id}
              linkHref={`/events/${event.city}/${event.id}`}
              title={event.title}
              image={event.image}
              description={event.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventCategoryPage;
