

export interface Product {

  id: number;
  name: string;
  price: number;
  description: string;
  pics: String;
  edition:String;
}


export const main = [
  {
    id: 1,
    edition: 'XL Series',
    product:[{
      id: 1,
      name: 'Phone XL ',
      price: 799,
      description: 'A large phone with one of the best screens',
      pics: 'assets/img/p1w.png',
      pics2: 'assets/img/p1b.png'
    },
    ]
  },
  {
    id: 2,
    edition: 'Mini Series',
    product:[
      {
        id: 2,
        name: 'Phone Mini ',
        price: 699,
        description: 'A great phone with one of the best cameras',
        pics: 'assets/img/p2w.png',
        pics2: 'assets/img/p2b.png'
      },
    
    ],
  },
  {
    id: 3,
    edition: 'Standard Series',
    product:[
      {
        id: 3,
        name: 'Phone ',
        price: 299,
        description: 'A great phone with the best specs for its price',
        pics: 'assets/img/p3w.png',
        pics2: 'assets/img/p3b.png'
      },
      
    ]
  }
]


export const products = [


  {
    id: 1,
    name: 'Phone XL White',
    price: 799,
    description: 'A large phone with one of the best screens',
    pics: 'assets/img/p1w.png'
  },

  {
    id: 3,
    name: 'Phone Mini White',
    price: 699,
    description: 'A great phone with one of the best cameras',
    pics: 'assets/img/p2w.png'
  },

  {
    id: 5,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with the best specs for its price',
    pics: 'assets/img/p3w.png'
  },

  {
    id: 2,
    name: 'Phone XL Black',
    price: 799,
    description: 'A large phone with one of the best screens',
    pics: 'assets/img/p1b.png'
  },
  {
    id: 4,
    name: 'Phone Mini Black',
    price: 699,
    description: 'A great phone with one of the best cameras',
    pics: 'assets/img/p2b.png'
  },
  {
    id: 6,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with the best specs for its price',
    pics: 'assets/img/p3b.png'
  }
];
