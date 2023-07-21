export const Data = [
    {
      id: 1,
      grade: 7,
      graded:"graded"
    },
    {
      id: 2,
      grade: 5,
      graded:"ungraded"

    },
    {
        id: 3,
        grade: 9,
        graded:"stale"
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