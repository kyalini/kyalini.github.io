//Q1

const employees = [
        {"name":"Sam",
        "department":"Tech",
        "designation":"Manager",
        "salary":40000,
        "raiseEligible":true},

        {"name":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "salary":18500,
        "raiseEligible":true},

        {"name":"Bill",
        "department":"HR",
        "designation":"Executive",
        "salary":21200,
        "raiseEligible":false},
]
console.log('problem 1',employees);

//Q2

const company = 
    {"companyName":"Tech Stars",
    "website":"www.techstars.site",
    "employees":[
        {"name":"Sam",
        "department":"Tech",
        "designation":"Manager",
        "salary":40000,
        "raiseEligible":true},

        {"name":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "salary":18500,
        "raiseEligible":true},

        {"name":"Bill",
        "department":"HR",
        "designation":"Executive",
        "salary":21200,
        "raiseEligible":false}
         ]
    }

console.log('problem 2',company);

//Q3

const companyUpdate = 
    {"companyName":"Tech Stars",
    "website":"www.techstars.site",
    "employees":[
        {"name":"Sam",
        "department":"Tech",
        "designation":"Manager",
        "salary":40000,
        "raiseEligible":true},

        {"name":"Mary",
        "department":"Finance",
        "designation":"Trainee",
        "salary":18500,
        "raiseEligible":true},

        {"name":"Bill",
        "department":"HR",
        "designation":"Executive",
        "salary":21200,
        "raiseEligible":false}
    ]
}
const newEmployee = 
        {"name":"Anna",
        "department":"Tech",
        "designation":"Executive",
        "salary":25600,
        "raiseEligible":false}

companyUpdate.employees.push(newEmployee);
console.log('problem 3',companyUpdate);

//Q4

let total = 0
for(let i = 0; i <company.employees.length; i++){
    total += company.employees[i].salary
}
console.log(total);

//Q5

const companyRaise = {"companyName" : "Tech Stars",
"website" : "www.techstars.site",
"employees" : [
    {
        "name" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligible" : true,
    },
    {
        "name" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligible" : true,
    },
    {
        "name" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raiseEligible" : false,
    },
    {
        "name" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raiseEligible" : false,
    }
]
}
function updateSalaryRaise(company) {
    for (let j = 0; j < company.employees.length; j++){
        if (company.employees[j].raiseEligible === true){
            let increaseSalary = company.employees[j].salary * 1.1;
            company.employees[j].salary = increaseSalary;
            company.employees[j].raiseEligible = false;
        }
    }
}
updateSalaryRaise(companyRaise);
console.log('problem 5',companyRaise.employees);

//Q6

const companyHome = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        },
        {
            "name": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
        }
    ]
}
for (let k = 0; k < companyHome.employees.length; k++) {
    if (companyHome.employees[k].name === "Anna" || companyHome.employees[k].name === "Sam") {
        companyHome.employees[k].wfh = true;
    } else {
        companyHome.employees[k].wfh = false;
    }
}
console.log('problem 6',companyHome.employees)
