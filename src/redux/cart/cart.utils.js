export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if(existingItem){
    return [...cartItems.filter(item => item.id !== cartItemToAdd.id), {...cartItemToAdd, quantity: ++existingItem.quantity}]
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
}