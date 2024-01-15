/*
 * File       : ReduxType.d.ts
 * Author     : FASTWEB
 *
 * Dependency : redux/modules
 *
 * SUMMARY:
 * 01) UrlSlice []
 * 02) UserSlice []
 */

import { PayloadAction } from '@reduxjs/toolkit';

/* *****************************************
 * 01) UrlSlice
 * *****************************************/
interface UrlState {
  prevUrl?: string;
  currentUrl?: string;
}

type SetUrlAction = PayloadAction<UrlState>;

export type { UrlState, SetUrlAction };

/* *****************************************
 * 02) UserSlice
 * *****************************************/
interface UserState {
  id: string;
  name: string | null;
  profileImg: string | null;
  height: string | null;
  weight: string | null;
}

type SetUserAction = PayloadAction<UserState>;

export type { UserState, SetUserAction };
