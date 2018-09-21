function dec_to_bin(n)
{
    if(n<0){
        n = n*-1;
    }

    return parseInt(n,10).toString(2);
}