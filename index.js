const employees = [
    ["a", "b", "c", 3],
    ["d", "e", "f", 4],
];
function createEmployeeRecord(array) {
    let employeeInfo = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeInfo;
}
//console.log(createEmployeeRecord(employees));

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
}

function createTimeInEvent(object, dateStamp){
    let [date, hour] = dateStamp.split(' ');
    hour = parseInt(hour);
    let type = "TimeIn";
    object.timeInEvents.push({type, hour, date});
    return object;
}

function createTimeOutEvent(object, dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    hour = parseInt(hour);
    let type = "TimeOut";
    object.timeOutEvents.push({type, hour, date});
    return object;
}

function hoursWorkedOnDate(obj, workDate) {
 
    let inTime = obj.timeInEvents
      .find((element) => element.date === workDate)
    //console.log('inTime', inTime);
      let outTime = obj.timeOutEvents
      .find((element) => element.date === workDate)
    
      return (outTime.hour - inTime.hour) / 100;
  }

  function wagesEarnedOnDate(object, date){
    return object.payPerHour * hoursWorkedOnDate(object, date);
  }

  function allWagesFor(object){
    
    //console.log(object.timeInEvents);
    let wages = object.timeInEvents
        .map((timeInEvent) => wagesEarnedOnDate(object, timeInEvent.date))
        .reduce((a, b) => a+b, 0);
        console.log('wages', wages);
        return wages
  }

  function calculatePayroll(arrayOfEmployees) {
   // console.log('arrayOfEmployees', arrayOfEmployees);
    let allEmpWages = arrayOfEmployees.map(employee => allWagesFor(employee))
       .reduce((a, b) => (a = a + b), 0);
        console.log(allEmpWages);
        return allEmpWages
  }


  