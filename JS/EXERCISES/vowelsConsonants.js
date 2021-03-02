function vowelsAndConsonants(s) {
    for(let i = 0; i <= s.length-1; i++ ){
            if(s[i] == 'a'|| s[i] == 'e'||s[i] == 'i'||s[i] == 'o'||s[i] == 'u'){
                    console.log(s[i]);
                }
            }
    for(let j = 0; j <= s.length-1; j++ ){
        if(s[j] != 'a' && s[j] != 'e' && s[j] != 'i' && s[j] != 'o' && s[j] != 'u'){
            console.log(s[j]);
        }
    }
}

vowelsAndConsonants('javascriptloops');