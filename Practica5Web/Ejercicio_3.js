function fib(num) {
    var fbz = 0;
    var fbu = 1;
    var fibo;

    console.log(fbz + "");
    console.log(fbu + "");

    for (var i = 2; i <= num; i++) {
        fibo = fbz + fbu;
        fbz = fbu;
        fbu = fibo;
        console.log(fibo + "");
    }
}