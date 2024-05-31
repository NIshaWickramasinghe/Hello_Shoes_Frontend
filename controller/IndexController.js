// // let homePage = $("body > div:first-child");
// let sale_page = $("body > div:nth-child(2)");
// let supplier_page = $("body > div:nth-child(3)");
// let customer_page = $("body > div:nth-child(4)");
// let employee_page = $("body > div:nth-child(5)");
// let stock_page = $("body > div:nth-child(6)");
// let item_page = $("body > div:nth-child(7)");
//
// const clear = function (){
//     // homePage.css("display","none");
//     sale_page.css("display","none");
//     supplier_page.css("display","none");
//     customer_page.css("display","none");
//     employee_page.css("display","none");
//     stock_page.css("display","none");
//     item_page.css("display","none");
// }
//
// // $("#dashboard").on('click',()=>{
// //     clear();
// //     homePage.css("display","block");
// // });
//
// $("#sale_page").on('click' , () => {
//     clear();
//     sale_page.css("display" , "block");
// });
//
// $("#supplier_page").on('click' , () => {
//     clear();
//     sale_page.css("display" , "block");
// });
//
// $("#customer_page").on('click' , () => {
//     clear();
//     sale_page.css("display" , "block");
// });
//
// $("#employee_page").on('click' , () => {
//     clear();
//     sale_page.css("display" , "block");
// });
//
// $("#inventory_page").on('click' , () => {
//     clear();
//     sale_page.css("display" , "block");
// });
//
// $("#item_page").on('click' , () => {
//     clear();
//     sale_page.css("display" , "block");
// });

$('#section_sale').css('display', 'none');
$('#section_supplier').css('display', 'none');
$('#section_customer').css('display', 'none');
$('#section_employee').css('display', 'none');
$('#section_inventory').css('display', 'none');
$('#section_product').css('display', 'none');

$('#dashboard').on('click', () => {
    $('#section_home').css('display', 'block');
    $('#section_sale').css('display', 'none');
    $('#section_supplier').css('display', 'none');
    $('#section_customer').css('display', 'none');
    $('#section_employee').css('display', 'none');
    $('#section_inventory').css('display', 'none');
    $('#section_product').css('display', 'none');
});

$('#sale_page').on('click', () => {
    $('#section_home').css('display', 'none');
    $('#section_sale').css('display', 'block');
    $('#section_supplier').css('display', 'none');
    $('#section_customer').css('display', 'none');
    $('#section_employee').css('display', 'none');
    $('#section_inventory').css('display', 'none');
    $('#section_product').css('display', 'none');
});

$('#supplier_page').on('click', () => {
    $('#section_home').css('display', 'none');
    $('#section_sale').css('display', 'none');
    $('#section_supplier').css('display', 'block');
    $('#section_customer').css('display', 'none');
    $('#section_employee').css('display', 'none');
    $('#section_inventory').css('display', 'none');
    $('#section_product').css('display', 'none');
});

$('#customer_page').on('click', () => {
    $('#section_home').css('display', 'none');
    $('#section_sale').css('display', 'none');
    $('#section_supplier').css('display', 'none');
    $('#section_customer').css('display', 'block');
    $('#section_employee').css('display', 'none');
    $('#section_inventory').css('display', 'none');
    $('#section_product').css('display', 'none');
});

$('#employee_page').on('click', () => {
    $('#section_home').css('display', 'none');
    $('#section_sale').css('display', 'none');
    $('#section_supplier').css('display', 'none');
    $('#section_customer').css('display', 'none');
    $('#section_employee').css('display', 'block');
    $('#section_inventory').css('display', 'none');
    $('#section_product').css('display', 'none');
});

$('#inventory_page').on('click', () => {
    $('#section_home').css('display', 'none');
    $('#section_sale').css('display', 'none');
    $('#section_supplier').css('display', 'none');
    $('#section_customer').css('display', 'none');
    $('#section_employee').css('display', 'none');
    $('#section_inventory').css('display', 'block');
    $('#section_product').css('display', 'none');
});

$('#item_page').on('click', () => {
    $('#section_home').css('display', 'none');
    $('#section_sale').css('display', 'none');
    $('#section_supplier').css('display', 'none');
    $('#section_customer').css('display', 'none');
    $('#section_employee').css('display', 'none');
    $('#section_inventory').css('display', 'none');
    $('#section_product').css('display', 'block');
});