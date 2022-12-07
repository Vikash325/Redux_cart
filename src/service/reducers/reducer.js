import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = {
  cartData: [
    {
      id: 0,
      name: "iPhone 6S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/iphone6s.png",
      price: "799/-",
      added: false,
      quntity: 1,
    },

    {
      id: 1,
      name: "iPhone 5S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/iphone5s.png",
      price: "349/-",
      added: false,
      quntity: 1,
    },
    {
      id: 2,
      name: "Macbook",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: "1499/-",
      added: false,
      quntity: 1,
    },

    {
      id: 3,
      name: "Macbook Air",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: "999/-",
      added: false,
      quntity: 1,
    },

    {
      id: 4,
      name: "Macbook Air 2013",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: "599/-",
      added: false,
      quntity: 1,
    },

    {
      id: 5,
      name: "Macbook Air 2012",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: "499/-",
      added: false,
      quntity: 1,
    },
  ],
  arrayValue: [],
  grocery: [
    {
      title: "Brown eggs",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      filename: "/images/grocery/Brown_eggs.png",
      height: 600,
      width: 400,
      price: 28.1,
      rating: 4,
    },
    {
      title: "Sweet fresh stawberry",
      type: "fruit",
      description: "Sweet fresh stawberry on the wooden table",
      filename: "/images/grocery/strawberries.png",
      height: 450,
      width: 299,
      price: 29.45,
      rating: 4,
    },
    {
      title: "Asparagus",
      type: "vegetable",
      description: "Asparagus with ham on the wooden table",
      filename: "/images/grocery/strawberries.png",
      height: 450,
      width: 299,
      price: 18.95,
      rating: 3,
    },
    {
      title: "Green smoothie",
      type: "dairy",
      description:
        "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
      filename: "/images/grocery/strawberries.png",
      height: 600,
      width: 399,
      price: 17.68,
      rating: 4,
    },
    {
      title: "Raw legums",
      type: "vegetable",
      description: "Raw legums on the wooden table",
      filename: "/images/grocery/strawberries.png",
      height: 450,
      width: 299,
      price: 17.11,
      rating: 2,
    },
    {
      title: "Baking cake",
      type: "dairy",
      description:
        "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
      filename: "/images/grocery/strawberries.png",
      height: 450,
      width: 675,
      price: 11.14,
      rating: 4,
    },
    {
      title: "Pesto with basil",
      type: "vegetable",
      description: "Italian traditional pesto with basil, chesse and oil",
      filename: "/images/grocery/Brown_eggs.png",
      height: 450,
      width: 299,
      price: 18.19,
      rating: 2,
    },
    {
      title: "Hazelnut in black ceramic bowl",
      type: "vegetable",
      description:
        "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
      filename: "/images/grocery/strawberries.png",
      height: 450,
      width: 301,
      price: 27.35,
      rating: 0,
    },
    {
      title: "Fresh stawberry",
      type: "fruit",
      description: "Sweet fresh stawberry on the wooden table",
      filename: "/images/grocery/strawberries.png",
      height: 600,
      width: 399,
      price: 28.59,
      rating: 4,
    },
    {
      title: "Lemon and salt",
      type: "fruit",
      description: "Rosemary, lemon and salt on the table",
      filename: "/images/grocery/Brown_eggs.png",
      height: 450,
      width: 299,
      price: 15.79,
      rating: 5,
    },
    {
      title: "Homemade bread",
      type: "bakery",
      description: "Homemade bread",
      filename: "/images/grocery/Brown_eggs.png",
      height: 450,
      width: 301,
      price: 17.48,
      rating: 3,
    },
    {
      title: "Legums",
      type: "vegetable",
      description: "Cooked legums on the wooden table",
      filename: "/images/grocery/Brown_eggs.png",
      height: 600,
      width: 399,
      price: 14.77,
      rating: 0,
    },
    {
      title: "Fresh tomato",
      type: "vegetable",
      description: "Fresh tomato juice with basil",
      filename: "/images/grocery/Brown_eggs.png",
      height: 600,
      width: 903,
      price: 16.3,
      rating: 2,
    },
    {
      title: "Healthy breakfast",
      type: "fruit",
      description:
        "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
      filename: "/images/grocery/Brown_eggs.png",
      height: 450,
      width: 350,
      price: 13.02,
      rating: 2,
    },
    {
      title: "Green beans",
      type: "vegetable",
      description: "Raw organic green beans ready to eat",
      filename: "/images/grocery/Brown_eggs.png",
      height: 450,
      width: 300,
      price: 28.79,
      rating: 1,
    },
    {
      title: "Baked stuffed portabello mushrooms",
      type: "bakery",
      description:
        "Homemade baked stuffed portabello mushrooms with spinach and cheese",
      filename: "/images/grocery/Brown_eggs.png",
      height: 600,
      width: 400,
      price: 20.31,
      rating: 1,
    },
    {
      title: "Strawberry jelly",
      type: "fruit",
      description: "Homemade organic strawberry jelly in a jar",
      filename: "/images/grocery/Brown_eggs.png",
      height: 400,
      width: 600,
      price: 14.18,
      rating: 1,
    },
    {
      title: "Pears juice",
      type: "fruit",
      description: "Fresh pears juice on the wooden table",
      filename: "/images/grocery/Brown_eggs.png",
      height: 600,
      width: 398,
      price: 19.49,
      rating: 4,
    },
    {
      title: "Fresh pears",
      type: "fruit",
      description: "Sweet fresh pears on the wooden table",
      filename: "/images/grocery/Brown_eggs.png",
      height: 600,
      width: 398,
      price: 15.12,
      rating: 5,
    },
    {
      title: "Caprese salad",
      type: "vegetable",
      description:
        "Homemade healthy caprese salad with tomato mozzarella and basil",
      filename: "/images/grocery/Brown_eggs.png",
      height: 400,
      width: 600,
      price: 16.76,
      rating: 5,
    },
    {
      title: "Oranges",
      type: "fruit",
      description:
        "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
      filename: "/images/grocery/Brown_eggs.png",
      height: 450,
      width: 274,
      price: 21.48,
      rating: 4,
    },
    
  ],
};

export default function cardItems(state = initialState, action) {
  // console.clear();
  switch (action.type) {
    case ADD_TO_CART:
      let newObj = state.cartData.map((item) => {
        if (item.id == action.data.items.id) {
          return { ...item, added: true };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cartData: newObj,
        arrayvalue: state.arrayValue.push(action.data.items),
      };
    case REMOVE_TO_CART:

      console.log("remove id", action.id);

      const newArrayValue = state.arrayValue.filter(
        (value) => state.arrayValue.indexOf(value) !== action.id.id
      );
      console.log("removed array", newArrayValue);
      return {
        ...state,
        arrayValue: newArrayValue,
      };

    default:
      return state;
  }
}
