import { modifyShopData } from "./shop.utils";
import { getShopCollectionRef } from "../../firebase/firebase.utils";

const FETCH_COLLECTION_STARTED = 'shop/FETCH_COLLECTION_STARTED';
const FETCH_COLLECTION_SUCCEEDED = 'shop/FETCH_COLLECTION_SUCCEEDED';
const FETCH_COLLECTION_FAILED = 'shop/FETCH_COLLECTION_FAILED';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTION_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        collections: modifyShopData(action.payload)
      };
    case FETCH_COLLECTION_FAILED:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export const fetchCollectionStarted = () => ({type: FETCH_COLLECTION_STARTED});
export const fetchCollectionSucceeded = (collection) => ({type: FETCH_COLLECTION_SUCCEEDED, payload: collection});
export const fetchCollectionFailed = (errorMessage) => ({type: FETCH_COLLECTION_FAILED, payload: errorMessage});

export const fetchCollectionAsync = () => async dispatch => {
  dispatch(fetchCollectionStarted());
  try {
    const snapshot = await getShopCollectionRef().get()
    const collectionResult = snapshot.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        id: doc.id,
        title,
        items,
      }
    });
    dispatch(fetchCollectionSucceeded(collectionResult));
  } catch(error){

    dispatch(fetchCollectionFailed(error))
  }
}
