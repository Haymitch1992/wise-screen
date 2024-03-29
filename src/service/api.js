// 获取设备
const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  GET_SETTING:`/deviceSeting.json`,
  GET_WEATHER_INFO: `${BASE_URL}/api/v1/device/platform_other/base_info`,// 获取天气
  GET_ATS_INFO: `${BASE_URL}/api/v1/device/platform_other/ats_info`,// 获取ATS 
  GET_TRAIN_INFO: `${BASE_URL}/api/v1/device/platform_other/train_info`,// 获取ATS 
  GET_DEVICE_ERROR: `${BASE_URL}/api/v1/device/platform_manage/device_error`,// 设备故障查询
  GET_GUIDE_INFO: `${BASE_URL}/api/v1/device/platform_ags/guide_info`,
  GET_WAIT_LINE: `${BASE_URL}/api/v1/device/platform_ips/wait_line`,  // 候车区实时人数
  STATION_INFO: `${BASE_URL}/api/v1/device/platform_other/station_info`,
}