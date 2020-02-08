// GLOBAL VARIABLES
let title = document.getElementById('title')
let description = document.getElementById('description')
let code = document.getElementById('code')
let list = document.querySelectorAll('#list-view')
let btnTop = document.getElementById('btnTop')
let btnShow = document.getElementById('btnShow')
let solution = document.getElementById('solution')
let clack = document.getElementById('clack')
let zip = document.getElementById('zip')

initialState()

// LIST OF SOLUTIONS 
let solutions = [
    {
        title: "01 - Sum All Numbers",
        description: "We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.",
        code: "\nfunction sumArr(arr) { \n let max = Math.max(arr[0], arr[1]); \n let min = Math.min(arr[0], arr[1]); \n let sum = 0; \n for(let i = min; i <= max; i++) { \n  sum += i; \n } \n return sum; \n} "
    },
    {
        title: "02 - Diff Two Arrays",
        description: "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.",
        code: "\nfunction diffArray(arr1, arr2) { \n let newArr = [...arr1, ...arr2] \n return newArr.filter(e => \n  !arr1.includes(e) || !arr2.includes(e)\n )\n}"
    },
    {
        title: "03 - Seek and Destroy",
        description: "You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.",
        code: "solving..."
    },
    {
        title: "04 - Wherefore art thou",
        description: "Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.",
        code: "solving..."
    },
    {
        title: "05 - Spinal Tap Case",
        description: "Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.",
        code: "\nfunction spinalCase(str) { \n return str \n  .replace(/([a-z])([A-Z])/g, '$1 $2') \n  .replace(/\\s|_/g, '-') \n  .toLowerCase() \n}"
    },
    {
        title: "06 - Pig Latin",
        description: "Translate the provided string to pig latin. Pig Latin takes the first consonant(or consonant cluster) of an English word, moves it to the end of the word and suffixes an 'ay'. If a word begins with a vowel you just add 'way' to the end. If a word does not contain a vowel, just add 'ay' to the end. Input strings are guaranteed to be English words in all lowercase.",
        code: "\nfunction translatePigLatin(str) { \n let firstChar = /^[aeiou]/gi \n if(firstChar.test(str)) return str = str + 'way' \n\n let char = str.match(/^[^aeiou]+/gi) \n str = str.replace(char, '') \n return str + char + 'ay' \n}"
    },
    {
        title: "07 - Search and Replace",
        description: "Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).",
        code: "solving..."
    },
    {
        title: "08 - DNA Pairing",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "09 - Missing letters",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "10 - Sorted Union",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "11 - Convert HTML Entities",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "12 - Sum All Odd Fibonacci",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "13 - Sum All Primes",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "14 - Smallest Common Multiple",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "15 - Drop it",
        description: "Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.\n Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.",
        code: "\nfunction dropElements(arr, func) {\n  while(!func(arr[0])) {\n   arr.shift() \n  } \n return arr \n}"
    },
    {
        title: "16 - Steamroller",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "17 - Binary Agents",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "18 - Everything be true",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "19 - Arguments Optional",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "20 - Make a person",
        description: "work in progress",
        code: "solving..."
    },
    {
        title: "21 - Map the Debri",
        description: "work in progress",
        code: "solving..."
    }
]

// DISPLAY SOLUTION 
list.forEach(element => {
    element.addEventListener('click', e => {
        scrollToDestination(title)
        clack.play()
        initCodeDisplay()
        let index = e.target.id
        title.innerHTML = solutions[index].title
        description.innerHTML = solutions[index].description
        code.innerHTML = solutions[index].code
    })
})

// INITIAL STATE
function initialState() {
    btnShow.style.display = 'none'
}

// INITIAL CODE DISPLAY
function initCodeDisplay() {
    btnShow.disabled = false
    solution.style.display = "none"
    btnShow.style.display = 'block'
    btnShow.innerHTML = 'SHOW CODE'
}

// SCROLL TO DESTINATION
function scrollToDestination(destination) {
    setTimeout(() => {
        destination.scrollIntoView({ behavior: 'smooth' })
    });
}

// SCROLL TOP
btnTop.addEventListener('click', () => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }))

// TOGGLE CODE DISPLAY
btnShow.addEventListener('click', () => {
    if (btnShow.innerHTML == 'SHOW CODE') {
        solution.style.display = "block"
        btnShow.innerHTML = 'HIDE CODE'
        zip.play()
        scrollToDestination(code)
    } else {
        solution.style.display = "none"
        btnShow.innerHTML = 'SHOW CODE'
    }
})
