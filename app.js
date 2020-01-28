let title = document.getElementById('title')
let description = document.getElementById('description')
let test = document.getElementById('test')
let code = document.getElementById('code')
let list = document.querySelectorAll('#list-view')

let solutions = [
    {
        title: "01 - Sum All Numbers",
        description: "We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.",
        tester: function () { sumAll() },
        code: "code 1"
    },
    {
        title: "02 - Diff Two Arrays",
        description: "Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.",
        tester: function () { diffArr() },
        code: "code 2"
    },
    {
        title: "03 - Seek and Destroy",
        description: "You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.",
        tester: function () { seekDestroy() },
        code: "code 3"
    }
]

list.forEach(element => {
    element.addEventListener('click', (e) => {
        let index = e.target.id
        title.innerHTML = solutions[index].title
        description.innerHTML = solutions[index].description
        solutions[index].tester()
        code.innerHTML = solutions[index].code
    })
})



