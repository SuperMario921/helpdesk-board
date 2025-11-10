'use client';

export default function StatusFilter({ value, onChange }) {
    const options = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

    return (
        <div>
            <label htmlFor="status-filter" className="block text-sm font-medium mb-1">Status</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}