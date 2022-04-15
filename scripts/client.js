$(document).ready( onReady);

function onReady(){
    $('#submitInfoButtonIn').on('click', employeeInfoIn)
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
   let el = $('#infoOut');
    el.empty();
    for (let i=0; i<employeeInfo.length; i++){
    el.append('<li' + employeeInfo[i].firstName + '</li>')

}
   // clearing inputs
   $('#firstNameIn').val('')
   $('#lastNameIn').val('')
   $('#idIn').val('')
   $('#jobTitleIn').val('')
   $('#annualSalaryIn').val('')

   employeeInfo.push(inputForm);
   console.log('Employee info array:', employeeInfo);

   
} // end employeeInfoIn
