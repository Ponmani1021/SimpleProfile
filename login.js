let form = document.getElementById("form")

form.addEventListener('submit',function(event){
    event.preventDefault();
    
    let userName = document.getElementById("name").value;
    let wNum = document.getElementById("num").value;

    let crtUserName = "Ponmani"
    let crtWNumber = "0123456789"

    if(userName === crtUserName && wNum === crtWNumber){
        window.location.href = "janpic.html"   //Navigate to another file
    }
    else{
        alert("Invalid Username or Whatspp Number")
    }
})

// for selecting profile image

let submitbutton = document.getElementById("submitbtn")
let Image = document.getElementById("img")

submitbutton.addEventListener('click', () => {
    const file = Image.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            localStorage.setItem('selectedImg',e.target.result)
            window.location.href = 'janpic.html'
        }
        reader.readAsDataURL(file)
    }
    else{
        alert('Please select an image first')
    }
})

let Gobackbtn = document.getElementById("gobackbtn")
function Goback(){
    window.location.href = "login.html"
}
