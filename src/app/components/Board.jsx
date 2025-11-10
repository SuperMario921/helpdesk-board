'use client';

import { useEffect, useMemo, useState } from 'react';
import StatusMessage from './StatusMessage';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        if (active) setTickets(data);
      } catch (err) {
        if (active) setError('Unable to load tickets.');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    const statuses = ['Open', 'In Progress', 'On Hold', 'Resolved'];
    const priorities = ['Low', 'Medium', 'High', 'Critical'];

    const interval = setInterval(() => {
      setTickets((prev) => {
        const next = [...prev];
        const i = Math.floor(Math.random() * next.length);
        const ticket = { ...next[i] };
        const change = Math.random() < 0.5 ? 'status' : 'priority';
        const opts = change === 'status' ? statuses : priorities;
        const current = opts.indexOf(ticket[change]);
        ticket[change] = opts[(current + 1) % opts.length];
        ticket.updatedAt = new Date().toISOString();
        next[i] = ticket;
        return next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [tickets.length]);

  const visibleTickets = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tickets.filter((t) => {
      const matchStatus = status === 'All' || t.status === status;
      const matchPriority = priority === 'All' || t.priority === priority;
      const matchSearch =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return matchStatus && matchPriority && matchSearch;
    });
  }, [tickets, status, priority, search]);

  const addToQueue = (id) =>
    setQueue((q) => (q[id] ? q : { ...q, [id]: true }));
  const removeFromQueue = (id) =>
    setQueue((q) => {
      const copy = { ...q };
      delete copy[id];
      return copy;
    });
  const clearQueue = () => setQueue({});

  if (loading)
    return <StatusMessage type="loading" message="Loading tickets..." />;
  if (error)
    return <StatusMessage type="error" message={error} />;

  return (
    <div className="grid gap-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <StatusFilter value={status} onChange={setStatus} />
        <PriorityFilter value={priority} onChange={setPriority} />
        <SearchBox value={search} onChange={setSearch} />
      </section>

      {visibleTickets.length === 0 ? (
        <StatusMessage type="empty" message="No tickets match your filters." />
      ) : (
        <>
          <TicketList
            tickets={visibleTickets}
            queue={queue}
            onAddToQueue={addToQueue}
          />
          <MyQueueSummary
            tickets={Object.keys(queue)
              .map((id) => tickets.find((t) => t.id === id))
              .filter(Boolean)}
            count={Object.keys(queue).length}
            onRemove={removeFromQueue}
            onClear={clearQueue}
          />
        </>
      )}
    </div>
  );
}

