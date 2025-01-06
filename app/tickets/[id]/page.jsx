import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()

  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}


async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0
    }
  })

  if (!res.ok) {
    notFound()
  }

  return await res.json()
}

const TicketDetails = async ({ params }) => {
const ticket = await getTicket(params.id)

  return ( 
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <h3>{ ticket.title }</h3>
      <small>Created by { ticket.user_email }</small>
      <p className="card">{ ticket.body }</p>
    <div className={`pill ${ticket.priority}`}>
      { ticket.priority } Priority
    </div>

    </main>
   );
}
 
export default TicketDetails;