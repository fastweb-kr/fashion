/*
 * File       : ItemsType.d.ts
 * Author     : FASTWEB
 *
 * Dependency : firebase/firebase.ts
 *
 * SUMMARY:
 * 01) StyleItem []
 */

/* *****************************************
 * 01) StyleItem
 * *****************************************/

interface StyleItem {
  id: string;
  userId: string;
  imgSrc: string[];
  name: string | null;
  profileImg: string | null;
  imgThumb?: string;
  content: string;
  postDate: string;
  tag: string[];
  comments?: string[];
}

export type { StyleItem };
