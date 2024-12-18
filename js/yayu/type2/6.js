 let objWithStringValue = {
    toString: function() {
        return 'hello'
    }
 }

 //console.log(Number(objWithStringValue))//NaN
 console.log(String(objWithStringValue))//hello

 let objWithValueOf = {
    toString: function() {
        return this;
    },
    valueOf: function() {
        return 2;
    }
 }

 console.log(String(objWithValueOf))

 let objWithoutPrimitive = {
    toString: function() {
        return this;
    },
    valueOf: function() {
        return this;
    }
 }
try {
    console.log(String(objWithoutPrimitive))
} catch (e) {
    console.log(e)
}
 