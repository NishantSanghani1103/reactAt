import React from 'react'

export default function App() {
  return (
    <>
      <section className='container-fluid m-0 p-0' >
        <div className='position-relative'>
          <figure>
            <img src="/images/HomeBanner.webp" className='w-100 m-0 p-0' alt="" />
          </figure>
          <main className='container'>
            <div className='position-absolute top-0 start-0  w-100 h-100 banner_bg'>
              <div className='d-flex align-items-center h-100 mx-5 '>
                <h1 className='m-0 p-0 text-white fw-bolder  w-auto '>India's No. 1 online <br /> bus ticket booking site</h1>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>

  )
}
