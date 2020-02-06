function validateForm() {
    var x = document.forms["personalInformation"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }