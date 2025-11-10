Ticket Queue App

A simple app to view, search, and manage tickets. Users can add tickets to their personal queue, see ticket details, and clear or remove tickets from the queue.

Features

View tickets with title, description, priority, status, assignee, and last updated.

Add/remove tickets to/from a personal queue.

Search tickets by title or description.

Loading, error, and empty state messages.

Tech

Next.js 13 (App Router)

React (Client Components)

Tailwind CSS

API

GET /api/tickets – returns a list of tickets:

{
  "id": "t-1023",
  "title": "Cannot connect to VPN",
  "description": "User reports intermittent VPN connectivity errors.",
  "priority": "High",
  "status": "Open",
  "assignee": "Unassigned",
  "updatedAt": "2025-10-31T14:05:00Z"
}

Run
npm install
npm run dev


Open http://localhost:3000