'use client';

export default function SearchBox({ value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="search" className="text-sm font-medium mb-1">
                Search
            </label>
            <input
                id="search"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search tickets..."
                className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}