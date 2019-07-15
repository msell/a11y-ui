import * as React from "react";

const TOGGLE_SELECTED = "TOGGLE_SELECTED";
const INIT = "INIT";

export interface IToggleActionCreator {
  type: string;
  id: number;
}

export interface IInitActionCreator {
  type: string;
  checkboxes: ICheckbox[];
  exclusiveId?: number;
}

export interface ICheckbox {
  id: number;
  name: string;
  checked: boolean;
}

export interface ICheckboxGroup {
  checkboxes: ICheckbox[];
  exclusiveId?: string | number;
}

export const toggleSelected = (id: number): IToggleActionCreator => ({
  type: TOGGLE_SELECTED,
  id,
});

export const initData = (checkboxes: ICheckbox[], exclusiveId?: number): IInitActionCreator => ({
  type: INIT,
  checkboxes,
  exclusiveId,
});

const reducer = (state: ICheckboxGroup, action: IToggleActionCreator & IInitActionCreator): ICheckboxGroup => {
  const { checkboxes, exclusiveId } = state;
  switch (action.type) {
    case INIT:
      return {
        checkboxes: action.checkboxes,
        exclusiveId: action.exclusiveId,
      };

    case TOGGLE_SELECTED:
      const exclusiveCheckbox = checkboxes.find(x => x.id === exclusiveId);

      if (action.id === exclusiveId && exclusiveCheckbox && !exclusiveCheckbox.checked) {
        return {
          ...state,
          checkboxes: [
            ...checkboxes.map(x => ({
              ...x,
              checked: x.id === exclusiveCheckbox.id ? true : false,
            })),
          ],
        };
      }

      // If we've reached down here then it means one of the non-exclusive checkboxes is changing
      return {
        ...state,
        checkboxes: checkboxes.map(x => {
          if (x.id === exclusiveId && x.checked) {
            // This is an exclusive checkbox and is currently checked, therefore needs to toggle
            return { ...x, checked: false };
          }

          if (x.id === action.id) {
            // This is the checkbox that is being toggled
            return { ...x, checked: !x.checked };
          }

          // this checkbox is not changing state
          return x;
        }),
      };
    default:
      return state;
  }
};

const defaultValue = {
  checkboxes: [],
};
export const useCheckboxGroup = (initialState: ICheckboxGroup = defaultValue): [ICheckboxGroup, any] => {
  return React.useReducer(reducer, initialState);
  // useReducer returns and array containing: [state, dispatch]
};

export default useCheckboxGroup;
