// code your solution here
// const record = [
//   { year: "2015",
//     result: "W"},
//   { year: "2014", 
//     result: "N/A"},
//]

function superbowlWin(record){
    for (let i=0; i < record.length; i++){
        if(record[i].result === "W"){
            return record[i].year}
    }
    return undefined
}


/*function superbowlWin(record){
    if(record.result === "W")
    return record.year
}*/
let found = record.find(record = record.result == "W")