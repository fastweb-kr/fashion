import { collection, query, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { Items } from '../@types';
import { db } from '../firebase';

// 파이어베이스 조회
export const getStyleItems = async (): Promise<Items[]> => {
  try {
    const q = query(collection(db, 'items'));
    const querySnapshop = await getDocs(q);

    const initialItems: Items[] = [];

    querySnapshop.forEach((doc) => {
      initialItems.push({ id: doc.id, ...doc.data() } as Items);
    });

    return initialItems;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return Promise.reject(error);
  }
};

// 파이어베이스 추가
export const addStyleItem = async (newItem: Items) => {
  try {
    const collectionRef = collection(db, 'items');
    await addDoc(collectionRef, newItem);
  } catch (error) {
    console.error('Error add data: ', error);
  }
};

// 파이어베이스 삭제
export const deleteStyleItem = async (id: string) => {
  try {
    const docRef = doc(db, 'items', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error delete data: ', error);
  }
};

// 파이어베이스 수정
export const updateStyleItem = async (updateItem: Items) => {
  try {
    const docRef = doc(db, 'items', updateItem.id);
    await updateDoc(docRef, { ...updateItem });
  } catch (error) {
    console.error('Error update data: ', error);
  }
};
