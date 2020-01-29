// GLOBAL VARIABLES
let title = document.getElementById('title')
let description = document.getElementById('description')
let test = document.getElementById('test')
let code = document.getElementById('code')
let list = document.querySelectorAll('#list-view')
let btnTop = document.getElementById('btnTop')

<<<<<<< HEAD
// LIST OF SOLUTIONS 
=======
// FUNCTIONS
function scrollToSolution() {
    title.scrollIntoView({ behavior: 'smooth'})
}

// SOLUTIONS OBJECT
>>>>>>> d3c678dbf6b2704c7bea2dfbe10789f98902cbf1
let solutions = [
    {
        title: "01 - Sum All Numbers",
        description: "We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.",
<<<<<<< HEAD
        code: "\nfunction sumArr(arr) { \n let max = Math.max(arr[0], arr[1]); \n let min = Math.min(arr[0], arr[1]); \n let sum = 0; \n for(let i = min; i <= max; i++) { \n sum += i; \n } \n return sum; \n} "
=======
        code: "\nfunction sumAll(arr) { \n var max = Math.max(arr[0], arr[1]); \n var min = Math.min(arr[0], arr[1]); \n var temp = 0; \n for(var i = min; i <= max; i++) { \n temp += i; \n } \n return temp; \n} "
>>>>>>> d3c678dbf6b2704c7bea2dfbe10789f98902cbf1
    },
    {
        title: "02 - Diff Two Arrays",
        description: "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.",
<<<<<<< HEAD
        code: "\nfunction diffArray(arr1, arr2) { \n let newArr = [...arr1, ...arr2] \n return newArr.filter(e => \n  !arr1.includes(e) || !arr2.includes(e)\n )\n}"
=======
        code: "\ncode 2"
>>>>>>> d3c678dbf6b2704c7bea2dfbe10789f98902cbf1
    },
    {
        title: "03 - Seek and Destroy",
        description: "You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.",
        code: "code 3"
    }
]

<<<<<<< HEAD
// DISPLAY SOLUTION 
list.forEach(element => {
    element.addEventListener('click', e => {
        scrollToTitle();
=======
// SCROLL TO SOLUTION AND INSERT DATA
list.forEach(element => {
    element.addEventListener('click', e => {
        scrollToSolution()
>>>>>>> d3c678dbf6b2704c7bea2dfbe10789f98902cbf1
        let index = e.target.id
        title.innerHTML = solutions[index].title
        description.innerHTML = solutions[index].description
        code.innerHTML = solutions[index].code
    })
})

// SCROLL TOP
<<<<<<< HEAD
btnTop.addEventListener('click', () => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }))
=======
btnTop.addEventListener('click', () => {
    document.documentElement.scrollTo({ top:0, behavior: 'smooth'})
})


>>>>>>> d3c678dbf6b2704c7bea2dfbe10789f98902cbf1

// SCROLL TO TITLE
function scrollToTitle() {
    title.scrollIntoView({ behavior: 'smooth' })
}

