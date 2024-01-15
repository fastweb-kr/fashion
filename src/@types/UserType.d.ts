/*
 * File       : UserType.d.ts
 * Author     : FASTWEB
 *
 * Dependency : firebase/firebase.ts
 *
 * SUMMARY:
 * 01) UserType []
 */

/* *****************************************
 * 01) UserType
 * *****************************************/

interface UserType {
  id: string;
  name: string | null;
  height: string | null;
  weight: string | null;
  profileImg: string | null;
}

export type { UserType };
