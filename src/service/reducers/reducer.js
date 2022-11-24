import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = {
  cartData: [
    {
      id: 0,
      name: "iPhone 6S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/iphone6s.png",
      price: 799,
      added: false,
      quntity:1
    },

    {
      id: 1,
      name: "iPhone 5S",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/iphone5s.png",
      price: 349,
      added: false,
      quntity:1
    },
    {
      id: 2,
      name: "Macbook",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: 1499,
      added: false,
      quntity:1
    },

    {
      id: 3,
      name: "Macbook Air",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: 999,
      added: false,
      quntity:1
    },

    {
      id: 4,
      name: "Macbook Air 2013",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: 599,
      added: false,
      quntity:1
    },

    {
      id: 5,
      name: "Macbook Air 2012",
      description:
        "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
      imageUrl: "/images/macbook.png",
      price: 499,
      added: false,
      quntity:1
    },
  ],
  arrayValue: [],
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
