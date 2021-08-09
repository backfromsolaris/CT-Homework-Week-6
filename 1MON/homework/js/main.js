
// See two links in index.html for completed CodeWars problems



//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = () => {
    let response = '';
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            response += `Matched dog_name\n`
        }else {
            response += `No Matches\n`
        }
    }return response
}
console.log(findWords())



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.


*/

given_arr = [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) =>{
    let new_arr = []
    for(let i = 0; i < given_arr.length; i++){
        if((arr[i]*2)<=50){
            new_arr.push(arr[i])
        }
    } return new_arr
}
console.log(replaceEvens(given_arr))

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...