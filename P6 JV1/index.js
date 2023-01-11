
let incre = 0

let countEl = document.getElementById("counter")
let saveEL = document.getElementById("save-el")
function increment() {
    // incre = incre + 1    
    incre += 1   // the above and below lines are same
    console.log(incre)
    console.log("clicked")
    countEl.innerText = incre

}

function saveEl() {
    let counterEl = incre + "-"
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEL.innerText += incre + "-"
    countEl.innerText = 0
    count = 0
    console.log(incre)
}

let noti = "You have three notifications!"

console.log(noti)

// ------Exercise------ //

// document.getElementById("counter").innerText = 5
//----------- task 1
// let myAge = 22
// console.log(myAge)

//----------task 2
// let myAge = 22
// let humanDogratio = 7
// let myDogAge = myAge * humanDogratio

// console.log(myDogAge)


//-----------task 3
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
// let count = 50

// count = count + 50
// console.log(count)

// count = count - 75
// console.log(count)

// count = count + 45
// console.log(count)


//------  TASK 4 ----- //

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum() {
//     let sum = lap1 + lap2 + lap3
//     console.log(sum)
// }

// lapSum()
