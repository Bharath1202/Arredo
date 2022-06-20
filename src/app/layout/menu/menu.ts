export const Menu = [
  {
    id: 'customer',
    title: 'Customer',
    type: 'collapsible',
    role: ['Admin'],
    children: [
      {
        id: 'clients',
        title: 'Clients',
        type: 'item',
        url: 'customers/client'
      },
    ]
  }
]
