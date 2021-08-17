import { IApiUrls } from "@/types/base";
// const PROTOCOL = "http"; // 协议
// const API_URL = `${PROTOCOL}://http://172.21.32.75:8000/api/sso/`; //标准接口
const API_URL = '/api'; //标准接口

const ACCOUNT: IApiUrls = {
  LOGIN: `${API_URL}/sso/ssoFacade/login`, // 登录
  RESET_PASSWORD: `${API_URL}/sso/ssoFacade/resetPassword`, // 修改密码
  VERIFY_ACCOUNT: `${API_URL}/sso/ssoFacade/verifyAccount`, // 验证账号
  SEND_CODE: `${API_URL}/sso/ssoFacade/sendCode`, // 发送二维码
  MSG_LOGIN: `${API_URL}/sso/ssoFacade/msgLogin`, // 短信登录

  WX_QR_PARAM: `${API_URL}/sso/ssoFacade/wxGetQrParam` // 获取微信二维码参数
};
const PLATFORM: IApiUrls = {
  LIST: `${API_URL}/ums/user/listPlatformResByUser` // 登录
}

export default { ACCOUNT, PLATFORM };
