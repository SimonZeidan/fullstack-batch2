
//1: Create a function that acts as the built-in replace All function
const word = {
    data: "",
    replaceAllImplementation : function (pattern, replacement){
        for(let i=0; i < this.data.length - 1; i++){
            if(this.data[i] === pattern[0]){
                if(this.checkifWordMatch(pattern,this.data, i)){
                        this.data = this.replaceWord(this.data, i, i + pattern.length,replacement);
                    }
                }
            }
            return this.data;
        },
        checkifWordMatch: function(pattern, word, index){
            for(let i=0; i< pattern.length; i++){
                if(word[index] != pattern[i]){
                    return false;
                }
                index++;
            }
            return true;
        },
        replaceWord : function (str,index, secIndex,chr) {
            if(index > str.length-1) return str;
            return str.substring(0,index) + chr + str.substring(secIndex);
        }
}

word.data = "this is a string string"
console.log(word.replaceAllImplementation("string","word"));
console.log('this is a string string'.replace(/string/g,"word"));


//2: Create a function that acts as the built-in concat function

function concatImplemention(word1, word2){
    return word1 + word2;
}

console.log(concatImplemention("Hello ", "World"));