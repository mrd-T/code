import {get,post} from "./http"

export const getLoginStaus = (params) => post('admin/login/status',params);