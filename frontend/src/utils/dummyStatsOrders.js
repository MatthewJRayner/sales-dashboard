export const dummyStatsOrders = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  return [
    {
      order_id: '4924',
      customer_name_first: 'Alice',
      customer_name_last: 'Smith',
      line_items: [
        { title: 'Cinnamon', current_quantity: 2 },
        { title: 'Baguette', current_quantity: 1 },
      ],
      delivery_date: formatDate(today), // Use custom format for consistency with OrdersDisplay
      notes: null,
    },
    {
      order_id: '4245',
      customer_name_first: 'Bob',
      customer_name_last: 'Johnson',
      line_items: [
        { title: 'Croissant', current_quantity: 2 },
      ],
      delivery_date: formatDate(tomorrow),
      notes: 'Please deliver before 10 AM',
    },
    {
      order_id: '4123',
      customer_name_first: 'Clara',
      customer_name_last: 'Davis',
      line_items: [
        { title: 'Large Classic', current_quantity: 5 },
        { title: 'Cardamon', current_quantity: 4 },
      ],
      delivery_date: formatDate(dayAfter),
      notes: 'Can the classic be darker, please.',
    },
  ];
};