 var name = "JJ"
 var a = {
    name: "薛之谦",
    func1:function(){
        console.log(this.name);
    },
    func2:function(){
        setTimeout(function(){
            // this 被指定了
            this.func1(); 
        }.call(a),1000)
    }
 }

 a.func2();