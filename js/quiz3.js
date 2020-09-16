const calculateGrade = (point) => {
    let garde = null
    if(point >= 81 && point <= 100) {
        console.log("A")
    } else if (point >= 71 && point <= 80){
        console.log("B")
    } else if (point >= 61 && point <= 70){
        console.log("C")
    } else if (point >= 51 && point <= 60){
        console.log("D")
    } else if (point >= 0 && point <= 50){
        console.log("F")
    } 
}

console.log(calculateGrade(55))