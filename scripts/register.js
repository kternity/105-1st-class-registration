//Create Constructor

function User(fname, lname,age,gender,phone, payment,color) {
  //list of attributes
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
}

function register() {
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputAge = $("#txtAge").val();
  let inputGender = $("#txtGender").val();
  let inputPhone = $("#txtPhone").val();
  let inputPayment = $("#selPayment").val();
  let inputColor = $("#selCol").val();
  
  let newUser = new User(inputFirstName,inputLastName,inputAge,inputGender,inputPhone,inputPayment,inputColor);
  console.log(newUser);
  }

  





/*javascript vs.jquery
----------------------
js: document.getElementById("txtAge").style.display="none";

jq: $("#txtAge").hide();

*/