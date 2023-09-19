// Global Function To Use -----------------

let dataValid = false;

// Go out From Form With X-Mark
function goOutForm() {
  formContainer.style.display="none";
  
}


// Store Data function 
function storeData(dataName, userName, emailAdrees, textContent) {
  dataName = {
    name: userName.value,
    email: emailAdrees.value,
    idea: textContent.value,
  }
  console.log(dataName);
}

// Show Successfull Mesagge 
function successMessage(button) {
  button.textContent = "Your Idea Send Successfuly";
  button.style.color = "white";
  button.style.background = "rgb(0, 99, 0)";
}




// All The Send idea on Nav Function For Validitore Data -----------------

// Show Send Idea Form
function showSendIdeaForm() {
  formContainer.style.display="block";
  sendIdeaForm.style.display="block";
  SubscribeForm.style.display="none"
}


// Valid Send Idea Data Form
function processSendIdeaFormData(e) {
  e.preventDefault();
  dataValid = sendIdeaForm.checkValidity();
  if (dataValid) {
  storeData('Send-Idea-Object', fullNmaeSendIdea, emailAddressSendIdea, sendIdeaContent);
  successMessage(submitSendIdeaBth);
}
}




// All The Subscribe on Nav Function For Validitore Data -----------------

// Show Subscibe Form
function showSubscribeForm() {
  formContainer.style.display="block";
  SubscribeForm.style.display="block";
  sendIdeaForm.style.display="none";
}


// Valid Subscribe Data Form
function processSubscribeFormData(e) {
  e.preventDefault();
  dataValid = SubscribeForm.checkValidity();
  if (dataValid) {
    storeData('Nav-Subscribe-Form', fullNmaeSubscribe, emailAddressSubscribe, 'In this form we dont have content input');
    successMessage(submitSubscribeBth);
  }
}




// // All The Subscribe Form3 On The Page Function For Form Validitore -----------------

function processSubscribeForm3Data(e) {
  e.preventDefault();
  dataValid = subscribeForm3.checkValidity();
  if (dataValid) {
    storeData('Subscribe-Form-On-Page', 'In this form we dont have name input', emailAddresspageForm3, 'In this form we dont have content input');
    successMessage(submitSubscribeBthForm3);
  }
}