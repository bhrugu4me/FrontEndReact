export function toShort(value,maxChar=20){
  let res='';
  if(value !== undefined && value.length>maxChar){
    res=value.substring(0,maxChar-1) + '...';
  }
  return res;
}