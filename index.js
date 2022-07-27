// Write your solution in this file!
const employees = {
    "John": "Penny Lane"
};
console.log(employees)

function updateEmployeeWithKeyandValue(employees, key, value){
    const newObject = {...employees}
    newObject[key] = value
    return newObject;
}
console.log(updateEmployeeWithKeyandValue(employees, "sam", "jones street"))

function destructivelyUpdateEmployeeWithKeyandValue(employees,key,value){
    employees[key] = value;
    return employees;
}
console.log(destructivelyUpdateEmployeeWithKeyandValue(employees, "Rob", "sunny bay"))


function deleteFromEmployeeByKey(employees, key){
    const newOb = {...employees};
    console.log(newOb)
    delete newOb[key];
    return newOb;
}

console.log(deleteFromEmployeeByKey(employees, "Rob"))



function destructivelyUpdateEmployeeByKey(employees, key){
    delete employees.key;
    return employees;
}