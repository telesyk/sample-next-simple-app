import React from 'react'
import PageHead from '../components/PageHead'

const AboutPage = () => {
  return (
    <>
      <PageHead pageTitle='About Us' />
      <article className='page__section'>
        <h1 className='page__title'>About Us</h1>
        <section>
          <h2 className='page__title-secondary'>Section 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam sapiente doloribus sint magni, repellendus officia illo cum, ipsa qui at? Saepe, aspernatur eaque veritatis quae iste architecto incidunt reprehenderit!</p>
        </section>
        <section>
          <h2 className='page__title-secondary'>Section 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam sapiente doloribus sint magni, repellendus officia illo cum, ipsa qui at? Saepe, aspernatur eaque veritatis quae iste architecto incidunt reprehenderit!</p>
        </section>
      </article>
    </>
  )
}

export default AboutPage