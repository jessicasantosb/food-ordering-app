import React from 'react'
import SectionHeaders from './SectionHeaders'

export default function Contact() {
  return (
    <section className='text-center my-16'>
      <SectionHeaders subHeader={'faça seu pedido agora mesmo'} mainHeader={"Contato"} />
      <div className='mt-8'>
        <a href="tel:+5500777773333" className='text-4xl underline text-gray-500'>+55 (98) 77777-3333</a>
      </div>
    </section>
  )
}
