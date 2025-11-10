export async function GET() {
    const tickets = [
        {
            id: 't-1001',
            title: 'Account locked out',
            description: 'Guessed password too many times and account locked',
            priority: 'High',
            status: 'Open',
            assignee: 'Peter',
            updatedAt: '2025-11-01T12:05:00Z'
        },
        {
            id: 't-1002',
            title: 'Scheduled maintenance on website',
            description: 'Fixing bugs and updating, unable to use for short time',
            priority: 'Low',
            status: 'In Progress',
            assignee: 'John',
            updatedAt: '2025-11-02T18:33:00Z'
        },
        {
            id: 't-1003',
            title: 'Device setup',
            description: 'New laptop for work needs to be connected and setup',
            priority: 'Low',
            status: 'In Progress',
            assignee: 'Dan',
            updatedAt: '2025-11-03T20:05:00Z'
        },
        {
            id: 't-1004',
            title: 'Virus',
            description: 'Computer has virus and unable to operate',
            priority: 'Critical',
            status: 'Resolved',
            assignee: 'Mario',
            updatedAt: '2025-11-04T02:45:00Z'
        },
        {
            id: 't-1005',
            title: 'Invoice has incorrect calculations',
            description: 'Some invoices are showing errors and overpricing',
            priority: 'Critical',
            status: 'On Hold',
            assignee: 'Jillian',
            updatedAt: '2025-11-05T22:15:00Z'
        },
        {
            id: 't-1006',
            title: 'Slow response and load times',
            description: 'Page takes about 5 seconds to load',
            priority: 'Medium',
            status: 'Open',
            assignee: 'Sarah',
            updatedAt: '2025-11-06T11:35:00Z'
        },
        {
            id: 't-1007',
            title: 'Login page not loading',
            description: 'Blank screen appearing instead of homepage',
            priority: 'Critical',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-07T17:12:00Z'
        },
        {
            id: 't-1008',
            title: 'Wifi router is powered off',
            description: 'Troubleshoot wires and cause',
            priority: 'Low',
            status: 'Open',
            assignee: 'Mike',
            updatedAt: '2025-11-08T19:09:00Z'
        },
        {
            id: 't-1009',
            title: 'Credentials expired',
            description: 'Need new sign in with 2FA',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'George',
            updatedAt: '2025-11-09T22:25:00Z'
        },
        {
            id: 't-1010',
            title: 'Weak Password',
            description: 'Password is just common word and can be compromised',
            priority: 'High',
            status: 'Resolved',
            assignee: 'Matt',
            updatedAt: '2025-11-10T14:02:00Z'
        },
        {
            id: 't-1011',
            title: 'Wifi unstable',
            description: 'Unable to work and stream videos',
            priority: 'Medium',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-11T05:33:00Z'
        },
        {
            id: 't-1012',
            title: 'Battery life',
            description: 'Battery does not charge to 100%',
            priority: 'Low',
            status: 'Resolved',
            assignee: 'Tony',
            updatedAt: '2025-11-12T22:45:00Z'
        }
    ];

    return Response.json(tickets);
}