import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
  FETCH_COLLECTION_STARTED,
  FETCH_COLLECTION_SUCCEEDED,
  fetchCollectionFailed,
} from './shop-reducer';
import { convertCollectionsSnapshotToMap, getShopCollectionRef } from "../../firebase/firebase.utils";


function* fetchCollection() {
  try {
    const collectionRef = getShopCollectionRef();
    const snapshot = yield collectionRef.get();
    const collectionResult = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put({type: FETCH_COLLECTION_SUCCEEDED, payload: collectionResult});
  } catch (e) {
    console.warn(e)
    yield put(fetchCollectionFailed(e));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    FETCH_COLLECTION_STARTED,
    fetchCollection
  )
}