$(document).ready( onReady);

function onReady(){
    $('#submitInfoButtonIn').on('click', employeeInfoIn)
    $('#submitInfoButtonIn').on('click', displayInfo)
    $('#submitInfoButtonIn').on('click', clearInputs)
}
employeeInfo =[];

function employeeInfoIn(){
   let inputForm = {
       firstName: $('#firstNameIn').val(),
       lastName: $('#lastNameIn').val(),
       ID: $('#idIn').val(),
       jobTitle: $('#jobTitleIn').val(),
       annualSalary: $('#annualSalaryIn').val()
   }
   employeeInfo.push(inputForm);
   console.log('Employee info array:', employeeInfo);


} // end employeeInfoIn
let monthlyCost = 0
function displayInfo(){
    console.log('in display info ');
   let el = $('#infoOut');
    el.empty();
    for (let i=0; i<employeeInfo.length; i++){
    el.append(`<li> ${employeeInfo[i].firstName}, ${employeeInfo[i].lastName},  ${employeeInfo[i].ID},${employeeInfo[i].jobTitle} : ${employeeInfo[i].annualSalary} </li>`)
    
    monthlyCost += Number(employeeInfo[i].annualSalary / 12);
    console.log(monthlyCost);
    $('#monthlyCostOut').empty().append('<h4>' +' Monthly Cost: ' + '$' +  monthlyCost  + '</h4>');
    if (monthlyCost >= 20000){
        console.log('too much');
    }
}
    
}
   // clearing inputs
   function clearInputs(){
   $('#firstNameIn').val('')
   $('#lastNameIn').val('')
   $('#idIn').val('')
   $('#jobTitleIn').val('')
   $('#annualSalaryIn').val('')}

  

   

