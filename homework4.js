1.
function tver(a){
    let result1 = []
    let result2 = []
    for(i = 0 ; i < a.length;i++){
        if(i%2===0){
            result1.push(a[i])
            
        }else{
          result2.push(a[i])
          }
    }
    return [result1,result2]
}

2.

4.
function  diferent(a) {
    let result = [];
    for (let i = 0; i <a.length; i++ ) {
        let x=false;
        for (let j=0; j<result.length; j++) {
            if (a[i]===result[j]) {
                x = true;
                break;
            }
        }
        if (x !== true) {
            result.push(a[i]);
        }
    }
    return result;
}