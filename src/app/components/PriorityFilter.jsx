'use client';

export default function PriorityFilter({ value, onChange }) {
    const options = ['All', 'Low', 'Medium', 'High', 'Critical'];

    return (
        <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
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