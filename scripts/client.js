$(document).ready( onReady);

function onReady(){
    $('#submitInfoButtonIn').on('click', employeeInfoIn)
    $('#submitInfoButtonIn').on('click', displayInfo)
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

function displayInfo(){
    console.log('in display info ');
   let el = $('#infoOut');
    el.empty();
    for (let i=0; i<employeeInfo.length; i++){
    el.append(`<li> ${employeeInfo[i].firstName}, ${employeeInfo[i].lastName},  ${employeeInfo[i].ID},${employeeInfo[i].jobTitle} : ${employeeInfo[i].annualSalary} </li>`)
    }
}
   // clearing inputs
   $('#firstNameIn').val('')
   $('#lastNameIn').val('')
   $('#idIn').val('')
   $('#jobTitleIn').val('')
   $('#annualSalaryIn').val('')

  

   

