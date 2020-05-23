export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);
  const indexOf = cartItems.indexOf(existingItem);
  if (existingItem) {
    return [...cartItems.slice(0, indexOf), {
      ...cartItemToAdd,
      quantity: ++existingItem.quantity
    }, ...cartItems.slice(indexOf + 1)]
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);
  const indexOf = cartItems.indexOf(existingItem);

    if (existingItem.quantity === 1) {
      return cartItems.filter(item => item.id !== existingItem.id);
    }
    return [...cartItems.slice(0, indexOf),
      {
        ...existingItem,
        quantity: --existingItem.quantity
      },
      ...cartItems.slice(indexOf + 1)];

};
