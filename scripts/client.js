$(document).ready( onReady);

function onReady(){
    $('#submitInfoButtonIn').on('click', employeeInfoIn)
    $('#submitInfoButtonIn').on('click', displayInfo)
    $('#submitInfoButtonIn').on('click', clearInputs)
    $('#itemsToAppend').on('click', '.deleteEmployeeButton', deleteEmployee) 
}
employeeInfo =[];
function employeeInfoIn(){ 
   let newEmployee = {
       firstName: $('#firstNameIn').val(),
       lastName: $('#lastNameIn').val(),
       ID: $('#idIn').val(),
       jobTitle: $('#jobTitleIn').val(),
       annualSalary: $('#annualSalaryIn').val()
   }
   employeeInfo.push(newEmployee);
   console.log('Employee info array:', employeeInfo);
   displayInfo(newEmployee);


} // end employeeInfoIn

function displayInfo(){ 
    console.log('in display info ');
       let el = $('#itemsToAppend');
        el.empty();
        let monthlyCost = 0;
 for (let i=0; i<employeeInfo.length; i++){
    el.append(`<tr><td> ${employeeInfo[i].firstName}</td>,
        <td> ${employeeInfo[i].lastName}</td>,  
        <td> ${employeeInfo[i].ID}</td>, 
        <td> ${employeeInfo[i].jobTitle}</td>
        <td> $${employeeInfo[i].annualSalary} </td>
        <td> <button class="deleteEmployeeButton" data-index="${i}">Delete</button>
         </td> </tr>`);
         monthlyCost += Number(employeeInfo[i].annualSalary / 12);

} // display monthyly cost  

//start if statement
if (monthlyCost >= 20000){
    console.log('too much');
    $('#monthlyCostOut').removeClass("withinBudget").addClass("overBudget")
    $('#monthlyCostOut').empty().append(`<h4> Monthly Cost Is Too High: $${monthlyCost.toFixed(2)} </h4>`);
} 
// change the color back to normal once someone is deleted 
else {
    $('#monthlyCostOut').addClass("withinBudget").removeClass("overBudget");
    el = $('#monthlyCostOut');
    el.empty();
    el.append('Total Monthly Cost: $', monthlyCost.toFixed(2));
}// end if statement
}// end displayInfo


 // clearing inputs
function clearInputs(){
   $('#firstNameIn').val('')
   $('#lastNameIn').val('')
   $('#idIn').val('')
   $('#jobTitleIn').val('')
   $('#annualSalaryIn').val('')
}// end clearInputs

function deleteEmployee(){
    console.log('in delete employee');
    // console.log('this has an index of:', $(this).data( 'index'));
    // $(this).parent().remove();
    employeeInfo.splice( $(this).data( 'index' ), 1 );
    displayInfo();

} // end deleteEmployee
   

   

