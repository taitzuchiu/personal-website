// action interface
export interface Action {
  type: string;
  payload: any;
}

// action types

export const CHANGE_SECTION = "CHANGE_SECTION";

// action creators

export const changeSection = (sectionID: number) => ({
  type: CHANGE_SECTION,
  payload: sectionID
});
