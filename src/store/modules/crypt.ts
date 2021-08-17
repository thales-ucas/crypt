import { defineStore } from 'pinia';
import { IRSA, ICryptForm } from '@/types/crypt';
import JSEncrypt from 'jsencrypt';

const rsa = new JSEncrypt();
function getRSA() {
  const privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIICXQIBAAKBgQDMFqQLgva7ABAy38gZ2UEVLGp2Yvx9uaabFxxze61gcjjzxUm9
  00Bes/ZA5Jw1jpsOb0mU7xGL7MajJY0itrqZ3NTURsZNs4XXT2pk0Lcof1W7oDj4
  HJE1wV/J7D32FLCPNT6/dwgPD5yPXiKOlo/v1NFRqYyPrUBSBLWzF0HPlwIDAQAB
  AoGBALhLlbWjfQSe6QHX3Q2ih0gEhNsFRjaOaGnSs+mA/K6EVvOi65VUZ+NdJXmy
  N3GRpmmhi1PHkxPFLBb1eP6o/dUGauHbtzBLfmsNb3HR6woLAdxhH3LlVxa51Uwl
  KeX6uGlZshW0Zaq48xuWbQG2R8EP6gWI/Im/Iar/J9kPPgkBAkEA/asefk5Kj5On
  8/5YtYaBf0pBBlZm6y+v9KCXkMxejxqpV0rk51h2V728RKavxoQ/mrnZJCDm7Ugx
  t842p/YDgQJBAM323DJ4Xe8lyu6X+C9K0H4BdF4qPEjOA/xJTce83OzaAYZv6vQh
  tnEeqlysLwO0o/2skUgRkrLmQ8a+MR+q/xcCQQCIn/vCh6R9BEg3kExzKMjiqDmx
  kiPIlFyu4zf/EzPy26dNjtcPC4Rh6Z1XVHfj8iLX0TV00gvOzU2J9BVYDZcBAkA5
  x2PUYMHxQcfhEQ7VrYY5owzTEcQhpHGnx6SjQM81Pp8o6KKf5Ak7SKAAKWly/6z1
  kACdmBhwSXp/+YDsYlr3AkB34Lh2oysbWub0LHF3SUH7WT3JU/ZkQBnA0IQlJGUz
  MWHQ7kYqAia0ZoPdZBp2+MeLLaE4DnKwCy0PMxacY7Ds
  -----END RSA PRIVATE KEY-----
  `;
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMFqQLgva7ABAy38gZ2UEVLGp2
  Yvx9uaabFxxze61gcjjzxUm900Bes/ZA5Jw1jpsOb0mU7xGL7MajJY0itrqZ3NTU
  RsZNs4XXT2pk0Lcof1W7oDj4HJE1wV/J7D32FLCPNT6/dwgPD5yPXiKOlo/v1NFR
  qYyPrUBSBLWzF0HPlwIDAQAB
  -----END PUBLIC KEY-----
  `;
  return {
    privateKey,
    publicKey
  }
}

const useCrypt = defineStore({
  id: 'crypt',
  state: () => ({
    rsa: <IRSA>getRSA(),
    form: <ICryptForm>{origin:'password'}
  }),
  getters: {
    
  },
  actions: {
    /**
     * 密码不对称加密
     * @param password 密码
     * @returns 加密后的密码
     */
    encode(password:string): string {
      rsa.setPublicKey(this.rsa.publicKey);
      const res = rsa.encrypt(password);
      return res ? res : '公钥错误';
    },
    /**
     * 密码不对称解密
     * @param password 密码
     * @returns 解密后的密码
     */
     decrypt(password: string):string {
      rsa.setPrivateKey(this.rsa.privateKey);
      const res = rsa.decrypt(password);
      return res ? res : '私钥错误';
    }
  }
});
export default useCrypt;