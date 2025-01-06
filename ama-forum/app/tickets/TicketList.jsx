import Link from 'next/link'
import React from 'react'

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
    { tickets.map((ticket) => (
      <div key={ticket.id} className='card my-5'>
        <Link href={`/tickets/${ticket.id}`}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(200)}...</p>
          <div className={`pill ${ticket.pripority}`}></div>
        </Link>
      </div>
  ))}
  {tickets.length === 0 && (
    <p className='text-center'>There are no any open question!!!</p>
  )}
  </>
  )
}
