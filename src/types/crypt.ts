export interface IRSA { // rsa加密
  privateKey: string; // 私钥
  publicKey: string; // 公钥
}
export interface ICryptForm { // 加密表单
  origin: string; // 原始值
  encrypt: string; // 加密
  decrypt: string; // 解密
}
