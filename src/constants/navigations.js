/**
 * navigations
 *
 * @package constants
 */

/**
 * ベースPATH
 * @type {string}
 */
export const BASE_PATH = "/react-output-router/";

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 * @type {{TOP: string, CREATE: string, EDIT: string, DETAIL: string}}
 */
export const NAVIGATION_LIST = {
  TOP: `${BASE_PATH}/`,
  CREATE: `${BASE_PATH}/create`,
  DETAIL: `${BASE_PATH}/detail/:id`,
  EDIT: `${BASE_PATH}/edit/:id`,
};

/**
 * パス一覧
 * 画面遷移時の使用
 * @type {{TOP: string, CREATE: string, EDIT: string, DETAIL: string}}
 */
export const NAVIGATION_PATH = {
  TOP: `${BASE_PATH}/`,
  CREATE: `${BASE_PATH}/create`,
  DETAIL: `${BASE_PATH}/detail/`,
  EDIT: `${BASE_PATH}/edit/`,
};
