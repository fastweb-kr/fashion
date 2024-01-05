import { collection, query, getDocs, addDoc, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import { StyleItem } from '../@types';
import { db, storage } from '../firebase';
import uuid from 'react-uuid';
import { uploadBytes, ref, getDownloadURL, deleteObject } from 'firebase/storage';

// 파이어베이스 조회
export const getStyleItems = async (): Promise<StyleItem[]> => {
  try {
    const q = query(collection(db, 'items'));
    const querySnapshot = await getDocs(q);

    const initialItems: StyleItem[] = [];

    querySnapshot.forEach((doc) => {
      initialItems.push({ id: doc.id, ...doc.data() } as StyleItem);
    });

    return initialItems;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return Promise.reject(error);
  }
};

export const getStyleItemsById = async (id: string) => {
  try {
    const docRef = doc(db, 'items', id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

// 파이어베이스 추가
export const addStyleItem = async (newItem: StyleItem) => {
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
export const updateStyleItem = async (updateItem: StyleItem) => {
  try {
    const docRef = doc(db, 'items', updateItem.id);
    await updateDoc(docRef, { ...updateItem });
  } catch (error) {
    console.error('Error update data: ', error);
  }
};

// 파이어스토어 파일 업로드
export const addImageToStorage = async (image: File | null) => {
  try {
    if (!image) return;
    const imageName = `${uuid()}_${image.name}`;

    const storageRef = ref(storage, `images/${imageName}`);
    await uploadBytes(storageRef, image);

    const downloadUrl = await getDownloadURL(storageRef);

    return downloadUrl;
  } catch (error) {
    console.error('Error upload data: ', error);
  }
};

export const removeImageFromStorage = async (image: File | null) => {
  try {
    if (!image) return;
    const storageRef = ref(storage, `images/${image}`);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error remove File data: ', error);
  }
};
