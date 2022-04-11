

export interface Product {

  id: number;
  name: string;
  price: number;
  description: string;
  pics: String;
 
}


export const main = [
  {
    series: 'XL Series',
    edition: [{
      white: [{
        product: [{
          id: 1,
          name: 'Phone XL White',
          price: 799,
          description: 'A large phone with one of the best screens',
          pics: 'assets/img/p1w.png',
        }]
      }],
      black: [{
        product: [{
          id: 1,
          name: 'Phone XL Black',
          price: 799,
          description: 'A large phone with one of the best screens',
          pics: 'assets/img/p1b.png',
        }]
      }]
    }
    ]
  },
  {
    series: 'Mini Series',
    edition: [{
      white: [{
        product: [
          {
            id: 2,
            name: 'Phone Mini White',
            price: 699,
            description: 'A great phone with one of the best cameras',
            pics: 'assets/img/p2w.png',

          },]
      }],
      black: [{
        product: [
          {
            id: 2,
            name: 'Phone Mini Black',
            price: 699,
            description: 'A great phone with one of the best cameras',

            pics: 'assets/img/p2b.png'
          },]
      }]
    }]
  },
  {
    series: 'Standard Series',
    edition: [{
      white: [{
        product: [
          {
            id: 3,
            name: 'Phone White',
            price: 299,
            description: 'A great phone with the best specs for its price',
            pics: 'assets/img/p3w.png',

          },]
      }],
      black: [{
        product: [
          {
            id: 3,
            name: 'Phone Black',
            price: 299,
            description: 'A great phone with the best specs for its price',

            pics: 'assets/img/p3b.png'
          },]
      }],
    }]
  },
]



  




