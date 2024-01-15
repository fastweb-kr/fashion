import { collection, query, getDocs, doc, deleteDoc, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserType } from '../../@types';

// 파이어베이스 조회
export const getUsers = async (): Promise<UserType[]> => {
  try {
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);

    const initialItems: UserType[] = [];

    querySnapshot.forEach((doc) => {
      initialItems.push({ id: doc.id, ...doc.data() } as UserType);
    });

    return initialItems;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return Promise.reject(error);
  }
};

export const getUserByEmail = async (id: string | null) => {
  try {
    if (!id) return;
    const docRef = doc(db, 'users', id);
    const docSnapshot = await getDoc(docRef);
    const userData = docSnapshot.data();

    return docSnapshot.exists() ? { id: docSnapshot.id, ...userData } : null;
  } catch (error) {
    console.error('Error fetching data: ', error);

    return null;
  }
};

// 파이어베이스 추가
export const addUser = async (newUser: UserType) => {
  try {
    const docRef = doc(db, 'users', newUser.id);
    await setDoc(docRef, newUser);
  } catch (error) {
    console.error('Error add data: ', error);
  }
};

// 파이어베이스 삭제
export const deleteUser = async (id: string) => {
  try {
    const docRef = doc(db, 'users', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error delete data: ', error);
  }
};

// 파이어베이스 수정
export const updateUser = async (updateUser: UserType) => {
  try {
    const docRef = doc(db, 'users', updateUser.id);
    await updateDoc(docRef, { ...updateUser });
  } catch (error) {
    console.error('Error update data: ', error);
  }
};
