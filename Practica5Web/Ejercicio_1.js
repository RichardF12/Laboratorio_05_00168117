function palin(word)
{
	for (var i=0;i<word.length;i++){
		if(word[i]!=word[word.length-i-1]){
			return console.log("No es palindromo");
		}
	}
	return console.log("Es palindromo");
}

