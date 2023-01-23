import React from 'react';
import PageHead from '../../../components/PageHead';
import SingleEvent from '../../../components/SingleEvent';

export async function getStaticPaths() {
  const { all_events } = await import('/data/data.json');
  const allPaths = all_events.map(path => {
    return {
      params: {
        event: path.id,
        category: path.city,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.event;
  const { all_events } = await import('/data/data.json');
  const eventData = all_events.find(event => id === event.id);

  return {
    props: {
      data: eventData,
    },
  };
}

const EventPage = ({ data }) => {
  return (
    <>
      <PageHead pageTitle={data.title} />
      <section className="page__section">
        <SingleEvent
          image={data.image}
          title={data.title}
          description={data.description}
          emails={data.emails_registered}
        />
      </section>
    </>
  );
};

export default EventPage;
