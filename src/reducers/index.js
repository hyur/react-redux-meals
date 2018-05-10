import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from "../actions";
import {combineReducers} from 'redux';
// 初始状态
const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null
  }
};

//食物 reducers
function food(state = {}, action) {
  const { recipe } = action;
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [recipe.babel]: recipe
      };
    default:
      return state;
  }
}
// 日历reducers：创建reducer纯函数，接收当前状态和action对象，返回新状态或者上一个状态。
function calendar(state = initialCalendarState, action) {
  const { day, meal, recipe } = action;
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.babel
        }
      };
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      };
    default:
      return state;
  }
}
// reducer合并，传入一个对象（因为redux的createStore只接受一个reducer，所以需要使用reducer组合）
export default combineReducers({
  food,
  calendar
});
