let token:string|null = null;
const KEY = 'token';
/**
 * 获取token
 */
const get = () => {
  if(Date.now() - Number(localStorage.getItem('expired')) > 12 * 3600 * 1000 ) {
    del();
  }
  if (!token) token = localStorage.getItem(KEY);
  return token;
};
/**
 * 设置token
 * @param {string} p token
 */
const set = (p:string) => {
  token = p;
  localStorage.setItem(KEY, p);
  //设置到期时间
  localStorage.setItem("expired", Date.now().toString());
};
/**
 * 删除token
 */
const del = () => {
  token = null;
  localStorage.removeItem(KEY);
};

export default { get, set, del };
