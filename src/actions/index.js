export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_FROM_CALENDAR = "REMOVE_FROM_CALENDAR";

/**
 * 目的:普通对象不易移植，为了使action更易移植和更容易测试。它们通常封装在叫做'action creator'的函数里.
 * 这些action并不修改状态本身，它们只是指出发生了一些事件，应该更新状态。
 * 务必使action保持专一性，不能出现副作用。
 */

//第一个动作创建器action creator，添加一个新食谱： 接收三个属性（星期几、食谱和餐型）
export function addRecipe({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    day,
    recipe,
    meal
  };
}

// 第二个动作创建器action creator，从日历删除一个事物项:  接收两个属性（星期几、餐型）
export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}
