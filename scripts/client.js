$(document).ready( onReady);

function onReady(){
    $('#submitInfoButtonIn').on('click', employeeInfoIn)
    $('#submitInfoButtonIn').on('click', displayInfo)
    $('#submitInfoButtonIn').on('click', clearInputs)
    $('#infoOut').on('click', '.deleteEmployeeButton', deleteEmployee) 
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
   let el = $('#infoOut');
    el.empty();
    let monthlyCost = 0;
    for (let i=0; i<employeeInfo.length; i++){
    el.append(`<li> ${employeeInfo[i].firstName},
     ${employeeInfo[i].lastName},  
     ${employeeInfo[i].ID}, 
     ${employeeInfo[i].jobTitle}: 
     ${employeeInfo[i].annualSalary} 
     <button class="deleteEmployeeButton" data-index="${i}">Delete</button>
     </li>`);
     monthlyCost += Number(employeeInfo[i].annualSalary / 12);
    
//start if statement
    if (monthlyCost >= 20000){
        console.log('too much');
        $('#monthlyCostOut').css("background-color", "red");
        $('#monthlyCostOut').empty().append(`<h4> Monthly Cost Is Too High!: ${monthlyCost} </h4>`);
    } // end if statement
} // display monthyly cost

el = $('#monthlyCostOut');
el.empty();
el.append('Total Monthly Cost: $', monthlyCost);
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

}
  

   

