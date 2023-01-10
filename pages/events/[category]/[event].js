import React from 'react'

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json')
  const allPaths = allEvents.map(path => {
    return {
      params: {
        event: path.id,
        category: path.city,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.event
  const { allEvents } = await import('/data/data.json')
  const eventData = allEvents.filter(event => id === event.id)

  return {
    props: {
      data: eventData[0],
    },
  }
}

const EventPage = ({data}) => {
  return (
    <h1>{data.title}</h1>
  )
}

export default EventPage