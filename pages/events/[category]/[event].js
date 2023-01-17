import React from 'react'
import Image from 'next/image'
import PageHead from '../../../components/PageHead'

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
  const eventData = allEvents.find(event => id === event.id)

  return {
    props: {
      data: eventData,
    },
  }
}

const EventPage = ({data}) => {
  return (
    <>
      <PageHead pageTitle={data.title} />
      <article className='page__section'>
        <Image src={data.image} width={500} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </article>
    </>
  )
}

export default EventPage