function submitEmployee(){
    var data = {
        "employeeId" : $("#emp_code").val(),
        "emp_Name" : $("#emp_name").val(),
        "profile_pic" : $("#profile_pic").val(),
        "emp_dob" : $("#employee_dob").val(),
        "civil_status" : $("#emp_civil_status").val(),
        "gender" : $("input[name='gender']:checked").val(),
        "mobile" : $("#emp_mobile").val(),
        "email" : $("#emp_email").val(),
        "guardian" : $("#emp_guardian").val(),
        "emergency_no" : $("#emp_emergency_contact").val(),
        "building_no" : $("#emp_building").val(),
        "lane" : $("#emp_lane").val(),
        "city" : $("#emp_city").val(),
        "state" : $("#emp_state").val(),
        "postal_code" : $("#emp_postal_code").val(),
        "designation" : $("#emp_designation").val(),
        "join_date" : $("#emp_join_date").val(),
        "branch" : $("#emp_branch").val(),
        "role" :$("input[name='role']:checked").val()

    };

    console.log(JSON.stringify(data));

    $.ajax({
        url:'http://localhost:8080/hello_shoes/api/v1/employee/addemployee',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data){
            console.log("success")
        },
        error: function (xhr, status, error){
            console.log(error);
            console.log("error");
        }
    });
}