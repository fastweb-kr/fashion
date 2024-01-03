/*
 * File       : ReduxType.d.ts
 * Author     : FASTWEB
 *
 * Dependency : redux/modules
 *
 * SUMMARY:
 * 01) UrlSlice []
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
