// GLOBAL VARIABLES
let title = document.getElementById('title')
let description = document.getElementById('description')
let test = document.getElementById('test')
let code = document.getElementById('code')
let list = document.querySelectorAll('#list-view')
let btnTop = document.getElementById('btnTop')

// LIST OF SOLUTIONS 
let solutions = [
    {
        title: "01 - Sum All Numbers",
        description: "We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.",
        code: "\nfunction sumArr(arr) { \n let max = Math.max(arr[0], arr[1]); \n let min = Math.min(arr[0], arr[1]); \n let sum = 0; \n for(let i = min; i <= max; i++) { \n sum += i; \n } \n return sum; \n} "
    },
    {
        title: "02 - Diff Two Arrays",
        description: "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.",
        code: "\nfunction diffArray(arr1, arr2) { \n let newArr = [...arr1, ...arr2] \n return newArr.filter(e => \n  !arr1.includes(e) || !arr2.includes(e)\n )\n}"
    },
    {
        title: "03 - Seek and Destroy",
        description: "You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.",
        code: "code 3"
    }
]

// DISPLAY SOLUTION 
list.forEach(element => {
    element.addEventListener('click', e => {
        scrollToTitle();
        let index = e.target.id
        title.innerHTML = solutions[index].title
        description.innerHTML = solutions[index].description
        code.innerHTML = solutions[index].code
    })
})

// SCROLL TOP
btnTop.addEventListener('click', () => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }))

// SCROLL TO TITLE
function scrollToTitle() {
    title.scrollIntoView({ behavior: 'smooth' })
}

