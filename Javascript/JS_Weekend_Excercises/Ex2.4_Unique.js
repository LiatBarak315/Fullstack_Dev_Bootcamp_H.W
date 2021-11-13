let num;
const findUniq =(n)=>{
    if(n[0]===n[1]){
        num=n[0];
        let i=0;
        while(num===n[i]){
            i++;
        }
        return(n[i]);
    }
    else 
        return (n[0]===n[2])?n[1]:n[0];
}
console.log( findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log( findUniq([ 0, 0, 0.55, 0, 0 ]));