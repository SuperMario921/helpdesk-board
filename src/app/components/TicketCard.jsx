'use client';

export default function TicketCard({ ticket, inQueue, onAdd }) {
    const { title, description, priority, status, assignee, updatedAt } = ticket;
    const time = new Date(updatedAt).toLocaleString();
    
    return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</p>

      <div className="text-sm mb-2">
        Priority: {priority} | Status: {status}
      </div>

      <div className="text-xs text-gray-500 mb-3">
        Assignee: {assignee} <br />
        Updated: {time}
      </div>

      <button
        onClick={onAdd}
        disabled={inQueue}
        className={`w-full px-3 py-2 rounded text-sm font-medium transition ${
          inQueue
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {inQueue ? 'Already in My Queue' : 'Add to My Queue'}
      </button>

      {inQueue && (
        <p className="mt-2 text-xs text-gray-500 text-center">
          This ticket is already in your queue.
        </p>
      )}
    </div>
  );
}