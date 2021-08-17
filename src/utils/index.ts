export const parseQueryString = ( url:string ) => {
  const reg_url = /^[^\?]+\?([\w\W]+)$/,
    reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g,
    arr_url = reg_url.exec( url ),
    ret:{[propName:string]:string} = {};
  if( arr_url && arr_url[1] ){
    const str_para = arr_url[1];
    let result;
    while((result = reg_para.exec(str_para)) != null){
      ret[result[1]] = decodeURIComponent(result[2]);
    }
  }
  return ret;
}