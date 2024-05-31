function submitCustomer() {
    var data = {
        "customerId": $("#cus_code").val() ,
        "cust_name": $("#customer_name").val(),
        "dob": $("#customer_dob").val(),
        "gender": $("input[name='gender']:checked").val(),
        "mobile": $("#cus_mobile").val(),
        "email": $("#cus_email").val(),
        "building_no": $("#cus_building").val(),
        "lane": $("#cus_lane").val(),
        "city": $("#cus_city").val(),
        "state": $("#cus_state").val(),
        "postalCode": $("#cus_postal_code").val(),
        "join_date": $("#cus_loyalty_join_date").val(),
        "recent_purchase": $("#cus_recent_purchase_date").val(),
        "total_points": 100,
        "level": $("input[name='level']:checked").val()

    };

    console.log(JSON.stringify(data));;

    $.ajax({
        url: 'http://localhost:8080/hello_shoes/api/v1/customer/addcustomer',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            console.log("success")

        },
        error: function (xhr, status, error) {
            console.log(error);
            console.log("error");
        }
    });


}

$(document).ready(() => {
    $.ajax({
        url: 'http://localhost:8080/hello_shoes/api/v1/customer/getallcustomer', // Spring Boot API endpoint
        method: 'GET',
        contentType: 'application/json',
        success: (data) => {
            data.forEach((customer) => {

                console.log("dom started")
                $('#cus_table > tbody').append(`<tr><td>${customer.customerId}</td><td>${customer.cust_name}</td><td>${customer.dob}</td><td>${customer.gender}</td>
                    <td>${customer.mobile}</td><td>${customer.email}</td><td>${customer.building_no}</td><td>${customer.lane}</td>
                    <td>${customer.city}</td><td>${customer.state}</td><td>${customer.postalCode}</td>
                    <td>${customer.join_date}</td><td>${customer.recent_purchase}</td><td>${customer.total_points}</td>
                    <td>${customer.level}</td></tr>`);
            });
        },
        error: (xhr, status, error) => {
            console.error('Error fetching data:', error);
        }
    });
});






