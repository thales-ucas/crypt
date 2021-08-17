import CustomAxios from './custom-axios';
import HTTP_EVENT from './event';
import URL from './url';

const http = new CustomAxios();

export { http, URL, HTTP_EVENT };
export default http;
