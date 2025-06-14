let form = document.getElementById("form")

form.addEventListener('submit',function(event){
    event.preventDefault();

    // getting the values from input box
    let userName = document.getElementById("name");
    let wNum = document.getElementById("num");

    //definig default value
    let crtUserName = "Ponmani"
    let crtWNumber = "0123456789"

    if((userName.value) === crtUserName && (wNum.value) === crtWNumber){
        window.location.href = "janpic.html"   //Navigate to another file
    }
    else{
        alert("Invalid Username or Whatspp Number");
        userName.value= "";
        wNum.value = "";
    }
})

// for selecting profile image

let submitbutton = document.getElementById("submitbtn")
let profileImage = document.getElementById("fileupload")
let previewimg = document.getElementById("previewImage")

profileImage.addEventListener('change', () => {
    const file = profileImage.files[0];
    if(file){
        
        const reader = new FileReader();
        reader.onload = function () {
            previewimg.src = reader.result; 
            localStorage.setItem('profileImage', reader.result);
        }
        reader.readAsDataURL(file);
    }
    else{
        alert('Please select an image first')

    }
})

