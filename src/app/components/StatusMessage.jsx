'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
    let message = '';
    let color = 'text-gray-600';

    if (loading) message = 'Loading...';
    else if (error) {
        message = `Error: ${error}`;
        color = 'text-red-600';
    }
    else if (isEmpty) message = 'No tickets match your filters.';

    if (!message) return null;
    
    return <p className={`text-sm text-center py-4 ${color}`}>{message}</p>
}