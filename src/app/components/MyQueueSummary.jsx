'use client';

export default function MyQueueSummary({ tickets, onRemove, onClear }) {
  const count = tickets.length;

  return (
    <aside className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">My Queue ({count})</h3>
        <button
          onClick={onClear}
          disabled={count === 0}
          className="text-sm text-red-600 hover:text-red-700 disabled:text-gray-400"
        >
          Clear
        </button>
      </div>

      {count === 0 ? (
        <p className="text-sm text-gray-500">No tickets in your queue.</p>
      ) : (
        <ul className="space-y-1">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="flex justify-between items-center text-sm">
              <span className="line-clamp-1">{ticket.title}</span>
              <button
                onClick={() => onRemove(ticket.id)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}