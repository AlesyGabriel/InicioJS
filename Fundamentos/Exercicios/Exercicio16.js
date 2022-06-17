let ho = 0 ;
let bixesto = false;
function checarAnoBixesto(ano){
        if (ano %400 ===0){
            let bixeo = true;
            return bixeo;
            };
        if(ano %100 !== 0){
            for (let a = 0; a < 8 ; a++) {
                ho = ano % 4 === 0
                if(ho = ano % 4 === 0){
                    let bix = true
                    return bix;
                }
                else{
                    let box = false
                    return box;
                }
                
            }
         }
         return bixesto;
    }
console.log (checarAnoBixesto(2000));
console.log (checarAnoBixesto(2020));
console.log (checarAnoBixesto(2100));
console.log (checarAnoBixesto(2022));