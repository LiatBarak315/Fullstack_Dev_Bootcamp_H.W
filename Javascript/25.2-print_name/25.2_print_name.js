const myobj={
    name:"yoni",
    printy:function(){
        console.log("the name: "+this.name);
    },
    printy2 :function(){
        setTimeout(this.printy.bind(this),1000)
    }
};
myobj.printy();
myobj.printy2();