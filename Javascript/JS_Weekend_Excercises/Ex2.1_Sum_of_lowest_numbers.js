const arr=[19, 5, 42, 2, 77];
const arr1=[10, 343445353, 3453445, 3453545353453];
const sum=(n)=>{
    n.sort(function(a, b){
        return a - b;
      });
    console.log(n);
    const sum1=n[0]+n[1];
console.log(sum1);
}
sum(arr);
sum(arr1);