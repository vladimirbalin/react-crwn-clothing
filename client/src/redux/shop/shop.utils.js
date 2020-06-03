export const modifyShopData = (collection) => {
  return collection.reduce((acc, itemCollection) => {
    const titleLowerCase = itemCollection.title.toLowerCase();
    acc[titleLowerCase] = {
      ...itemCollection,
      routeName: encodeURI(titleLowerCase)
    }
    return acc;
  }, {})
}