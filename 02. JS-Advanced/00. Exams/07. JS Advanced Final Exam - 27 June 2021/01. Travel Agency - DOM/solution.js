window.addEventListener("load", solution);

function solution() {
  const fullNameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");
  const postalCodeInput = document.getElementById("code");
  const submitBtn = document.getElementById("submitBTN");
  const infoPreviewOutput = document.getElementById("infoPreview");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");

  submitBtn.addEventListener("click", (ev) => {
    if (fullNameInput.value !== "" && emailInput.value !== "") {
      addToPreview(
        ev,
        fullNameInput.value,
        emailInput.value,
        phoneInput.value,
        addressInput.value,
        postalCodeInput.value
      );
      clearInputs();
    }
  });

  function addToPreview(ev, fname, email, phone, address, code) {
    ev.preventDefault();
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
    infoPreviewOutput.innerHTML = `<li>Full Name: ${fname}</li>
    <li>Email: ${email}</li>
    <li>Phone Number: ${phone}</li>
    <li>Address: ${address}</li>
    <li>Postal Code: ${code}</li>`;

    editBtn.addEventListener("click", () => {
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      infoPreviewOutput.innerHTML = "";
      returnEditValues(fname, email, phone, address, code);
    });

    continueBtn.addEventListener("click", () => {
      document.getElementById("block").innerHTML =
        "<h3>Thank you for your reservation!</h3>";
    });
  }

  function returnEditValues(fname, email, phone, address, code) {
    fullNameInput.value = fname;
    emailInput.value = email;
    phoneInput.value = phone;
    addressInput.value = address;
    postalCodeInput.value = code;
  }

  function clearInputs() {
    fullNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    addressInput.value = "";
    postalCodeInput.value = "";
  }
}
