
import bigMealCombo from '../images/Bucket_COB.png'
import BigBox_Zinger from '../images/BigBox_Zinger.png'
import bigBucket from '../images/Bucket_Tenders_Laying.png'
import Box_2pc from '../images/Box_2pcFeed.png'
import Popcorn from '../images/PopcornChicken.png'
import Fries from '../images/Fries.png'
import Twister from '../images/Twister.png'
import HotWings from '../images/HotWings.png'
import ColeSlaw from '../images/ColeSlaw.png'

export const BigMeal = [
  {
    id: "1",
    name: "Big Meal Combo 1",
    price: 25500,
    desc: "9 pieces of chicken with regular fries and a Pepsi",
    image: bigMealCombo,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: "2",
    name: "Big Box Zinger x4",
    price: 45500,
    desc: "4x 2 pieces of chicken with a burger and a Pepsi",
    image: BigBox_Zinger,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: "3",
    name: "Family Bucket",
    price: 55500,
    desc: "12 pieces of chicken for the mandem, wayasay!",
    image: bigBucket,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const StreetWise = [
  {
    id: "1",
    name: "StreetWise 1",
    price: 19500,
    desc: "2 pieces of chicken with regular fries and a Pepsi",
    image: BigBox_Zinger,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: "2",
    name: "StreetWise 2",
    price: 25500,
    desc: "3 pieces of chicken with a burger and a Pepsi",
    image: Box_2pc,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: "3",
    name: "Streetwise Popcorn",
    price: 5500,
    desc: "Because why not",
    image: Popcorn,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const specialSnackss = [
  {
    id: "1",
    name: "ColeSlaw",
    price: 9500,
    desc: "Because why not",
    image: ColeSlaw,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: "2",
    name: "Twister x2",
    price: 15500,
    desc: "Crispy fries",
    image: Twister,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: "3",
    name: "HotWings",
    price: 5500,
    desc: "Spicy Hot Wings that make u run to the toilet",
    image: HotWings,
    options: [
      {
        title: "small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const MenuCategories = [
  {
    id: "1",
    slug: "streetwise",
    name: "Streetwise Combos",
    desc: "Streetwise innit bruv",
    image: BigBox_Zinger,
  },
  {
    id: "2",
    slug: "bigMeals",
    name: "Family Big Meals",
    desc: "Big boys neighbourhood chicken for the mandem",
    image: bigBucket,
  },
  {
    id: "3",
    slug: "specialSnacks",
    name: "Special Snacks",
    desc: "Maddd snacks for the bredren",
    image: Fries,
  },
];