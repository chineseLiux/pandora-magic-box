import {CHANGE_LOCALES, Settings} from "@/store/types";

export const initSettings = {
  locale: 'zh-CN'
}

const settings = (state: Settings, action: any ) => {
  switch (action.type) {
    case CHANGE_LOCALES:
      return {
        ...state || initSettings,
        locale: action.locale
      }
    default:
      return state || initSettings;
  }
}

export default settings
