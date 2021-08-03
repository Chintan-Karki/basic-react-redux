import * as types from "./actionTypes";
// Action creator
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
