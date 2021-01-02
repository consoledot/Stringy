class Stringy{
    constructor(name){
        this.name = name
        this.vowel = ["a", "e", "i", "o", "u"]
    }
    print(){
        console.log(this.name)
    } 
    arr(){
       return this.name.split("") 
    }
    len(){
        return this.name.length
    }
    reverse(){
        let reverArr = [];
        let arr = this.arr()
        for(let i =0; i < this.len(); i++){
            reverArr.push(arr.pop())
        }
        return reverArr
    }
    upperCase(){
        return this.name.toUpperCase()
    }
    lowerCase(){
        return this.name.toLowerCase()
    }
    replace(index, newVal){
        let nameArray = this.arr()
        nameArray[index] = newVal
        return nameArray
    }
    update(val){
        return `${this.name} ${val}` 
    }
    str(){
       return this
    }
    getVowel(){
        let vowel = []
        this.arr().forEach(val=>{
            if(this.vowel.includes(val)){
                vowel.push(val)
            }
        })
        return vowel.join("")
    }
    getConsonant(){
        let consonant = []
        this.arr().forEach(val=>{
            if(!this.vowel.includes(val)){
                consonant.push(val)
            }
        })
        return consonant.join("")
    }
}

module.exports = Stringy