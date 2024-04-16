const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let salaryInfo = 'the total salary for all company employees is ';
    let raiseInfo;
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

    fetch(requestURL)
    .then(response => response.text())
    .then(text => displayInfo(text))

    function displayEmployeeInfo(staffString) {
      let total = 0;

      const staffs = JSON.parse(staffString)
    
    for (staff of staffs){
        salaryInfo += staff.salary.length;

    }

      para1.textContent = salaryInfo;
      para2.textContent = raiseInfo;
    }

    section.appendChild(para1);
    section.appendChild(para2);
