// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEL = document.getElementById("save-el")

function increment() {
	count++
	countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
	// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
	let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
	saveEL.textContent += countStr
	// NB: Make sure to not delete the existing content of the paragraph
	countEl.textContent = 0
	count = 0
}

console.log("Let's count people on the subway!")









