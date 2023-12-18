import { createContext ,useEffect, useReducer} from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  remove:(id)=>{}
});
export default CartContext;

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  // if (action.type === "REMOVE") {
  //   // getting the item index
  //   const existingCartItemIndex = state.items.findIndex(
  //     (item) => item.id === action.item
  //   );
  //   const updatedItems = [...state.items];

  //   if (existingCartItemIndex){
  //     updatedItems.pop(existingCartItemIndex, 1)
  //   }
   
  // }
  if (action.type === "REMOVE") {
    // Getting the item index
    const updatedItems = state.items.filter(item => item.id !== action.id);
      return { ...state,
        items: updatedItems,
      }

  }
  if (action.type === "REMOVE_ITEM") {
    // getting the item index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //storing the iten 
    const existingCartItem = state.items[existingCartItemIndex];
        // getting existing state item
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
        // remove stating from the index
      updatedItems.splice(existingCartItemIndex, 1);
    }
     else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });


  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatchCartAction({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart data to localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function remove(id) {
    dispatchCartAction({ type: "REMOVE", id });
  }
  // const addItem = (item) => {
  //   dispatchCartAction({ type: 'ADD_ITEM', payload: item });
  // };


  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    remove
  };
  console.log(cartContext)
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
