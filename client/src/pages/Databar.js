export const Databar = [
    {
      id: 1,
      item:"chilly" ,
      quantity:87
    },
    {
        id: 2,
        item:"tomato" ,
        quantity:25

    },
    {
        id: 3,
      item:"onion" ,
      quantity:35
      },
      {
        id: 4,
      item:"garlic" ,
      quantity:50
      },
      {
        id: 5,
      item:"ginger" ,
      quantity:60
      },
      {
        id: 6,
      item:"brinjal" ,
      quantity:30
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