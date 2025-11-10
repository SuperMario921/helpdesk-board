'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, queue, onAddToQueue }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tickets.map(ticket => (
                <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    inQueue={!!queue(ticket.id)}
                />
            ))}
        </div>
    );
}