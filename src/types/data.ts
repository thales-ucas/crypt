interface IDataBase {// 数据库基础信息
  id?: string;
  createTime: string;
  updateTime: string;
}
export interface IUser extends IDataBase { // 用户
  companyCode: string;
  companyName: string;
  createUser: string;
  deleted: boolean;
  email: string;
  loginStatus: boolean;
  loginTimes:	number; // 0为首次登录，大于0则登录过 登录次数
  remark: string;
  tel: string;
  tenantId: number;
  token: string;
  updateUser: string;
  userAccount: string;
  userId: number;
  userName: string;
  userPassword: string;
  userSex: string;
  wxOpenId: string; // 返回值为false 且仅有微信openId时需跳转到绑定手机界面 微信openId
  isDefaultPwd: boolean; // 是否初始密码
}
export interface IPlatform extends IDataBase { // 审批表单
  createUser: string|null;
  deleted: boolean;
  path: string;
  systemCode: string;
  systemName: string;
  tenantId: number|string|null;
};
