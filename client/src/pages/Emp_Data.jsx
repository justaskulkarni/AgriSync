export const Emp_Data = [
    {
      id: 1,
      category:"PAC Employees" ,
      quantity:87,
    },
    {
        id: 2,
        category:"Farmers" ,
        quantity:25,

    },
    {
        id: 3,
      category:"PCA Employees" ,
      quantity:35
      },
      {
        id: 4,
      category:"CPC Employees" ,
      quantity:50
      }, 
  ];

  const data = {
    labels: ['Red', 'Orange'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]  };