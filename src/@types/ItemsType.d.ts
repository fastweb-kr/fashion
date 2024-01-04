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
  imgThumb: string;
  title: string;
  postDate: string;
  tag: string[];
  comments: string[];
  desc: string;
}

export type { StyleItem };
