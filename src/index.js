module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
   
   
 for (let i = 0; i < bracketsConfig.length; i++){ 
   let bracketsConfigItem = bracketsConfig[i];
   for ( let k = 0; k < bracketsConfigItem.length; k++ ){
     for ( let l = 0; l < strArr.length; l++){
       if (strArr[l] === bracketsConfigItem[k] && strArr[l + 1] === bracketsConfigItem[k + 1] && strArr[l + 1] !== undefined){
         strArr.splice(l, 2);
         l = 0;
         k = 0;
         i = 0;
       } 
     }
   }
 }
   for (let i = 0; i < bracketsConfig.length; i++){ 
   let bracketsConfigItem = bracketsConfig[i];
   for ( let k = 0; k < bracketsConfigItem.length; k++ ){
     for ( let l = 0; l < strArr.length; l++){
       if (strArr[l] === bracketsConfigItem[k] && strArr[l + 1] === bracketsConfigItem[k + 1] && strArr[l + 1] !== undefined){
         strArr.splice(l, 2);
         l = 0;
         k = 0;
         i = 0;
       } 
     }
   }
 }
 for (let i = 0; i < bracketsConfig.length; i++){ 
  let bracketsConfigItem = bracketsConfig[i];
  for ( let k = 0; k < bracketsConfigItem.length; k++ ){
    for ( let l = 0; l < strArr.length; l++){
      if (strArr[l] === bracketsConfigItem[k] && strArr[l + 1] === bracketsConfigItem[k + 1] && strArr[l + 1] !== undefined){
        strArr.splice(l, 2);
        l = 0;
        k = 0;
        i = 0;
      } 
    }
  }
}
for (let i = 0; i < bracketsConfig.length; i++){ 
  let bracketsConfigItem = bracketsConfig[i];
  for ( let k = 0; k < bracketsConfigItem.length; k++ ){
    for ( let l = 0; l < strArr.length; l++){
      if (strArr[l] === bracketsConfigItem[k] && strArr[l + 1] === bracketsConfigItem[k + 1] && strArr[l + 1] !== undefined){
        strArr.splice(l, 2);
        l = 0;
        k = 0;
        i = 0;
      } 
    }
  }
}
for (let i = 0; i < bracketsConfig.length; i++){ 
  let bracketsConfigItem = bracketsConfig[i];
  for ( let k = 0; k < bracketsConfigItem.length; k++ ){
    for ( let l = 0; l < strArr.length; l++){
      if (strArr[l] === bracketsConfigItem[k] && strArr[l + 1] === bracketsConfigItem[k + 1] && strArr[l + 1] !== undefined){
        strArr.splice(l, 2);
        l = 0;
        k = 0;
        i = 0;
      } 
    }
  }
}
  if (strArr.length > 0){
    return false
  } else {
    return true
  }
}