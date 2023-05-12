let ar = [];
function myfunc(index) {
    for (var i = 0; i < 100000; i++) {
        ar[i] = i;
    }
    return (index) => {
        console.log(ar[index]);
    }
}

let returnedFunction = myfunc(index)
returnedFunction(10)