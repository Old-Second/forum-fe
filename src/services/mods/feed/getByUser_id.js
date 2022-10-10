/**
 * @desc list 用户的动态 api
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** user_id */
  user_id;
  /** limit */
  limit;
  /** page */
  page;
  /** last_id */
  last_id;
}

export const method = 'GET';

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/feed/list/{user_id}', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
