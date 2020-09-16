for (let i = 1; i<= 20 ; i+=1) {
    console.log(i)
}

let tamp = ['apple','babana','kiwi']
tamp.forEach((element, idx) => {
    console.log(idx, element)
});

let newValue = temp.map((element, idx) => {
    return `${idx+1}.${element}`
})
console.log(newValue)

let filterMoreThanZero = [-1,2,3,56,6,-93,0,4].filter(el => el >= 0)
console.log(filterMoreThanZero)