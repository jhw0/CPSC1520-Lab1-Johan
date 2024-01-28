const openModalButton = document.querySelector("#open-modal");
const emailDialog = document.querySelector("#openEmailDialog");
const closeModalButton = document.querySelector("#closeEmailDialog");
const profileForm = emailDialog.querySelector("form");


//event listener to open dialog
openModalButton.addEventListener("click", openDialog);
//event listener to close dialog
closeModalButton.addEventListener("click", closeDialog);
//event listener to close dialog on outside click
emailDialog.addEventListener("click", onClickOutsideDialog);
//event listener submit form
profileForm.addEventListener("submit", onUpdateProfile);



//event functions
function openDialog() {
    emailDialog.showModal();
}

function closeDialog() {
    emailDialog.close();
}

function onClickOutsideDialog(e)
{
    const dialogDimensions = emailDialog.getBoundingClientRect();
    if
        (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        )
    {
        resetForm();
        e.currentTarget.close();
    }
}

function resetForm()
{
    const form = document.querySelector("form");
    form.reset();
}

function onUpdateProfile(e)
{
    e.preventDefault();
    const fullName = document.getElementById("name").value.trim();
    const email = emailDialog.querySelector("[name='email']").value.trim();
    const phone = emailDialog.querySelector("[type='tel']").value.trim();
    const message = document.getElementById("message").value.trim();

    console.log({ fullName, email, phone, message });
    // emailDialog.close(); 
    e.target.reset();    
}





