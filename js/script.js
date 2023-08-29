
const email = document.querySelector("#email-icon")
const emailShown = document.querySelector("#email-address")

email.addEventListener("click", () => {
   // email.classList.toggle("header__icons-emailIconHidden")
    emailShown.classList.toggle("header__icons-emailAddressHidden")
    emailShown.classList.toggle("header__icons-emailAddressShown")
    
})

emailShown.addEventListener("click",() => {
    emailShown.classList.remove("header__icons-emailAddressShown")
    emailShown.classList.add("header__icons-emailAddressHidden")
    // email.classList.toggle("header__icons-emailIconHidden")
})


const phone = document.querySelector("#phone-icon")
const phoneShown = document.querySelector("#phone-number") 

phone.addEventListener("click", () => {
    // phone.classList.toggle("header__icons-phoneIconHidden")
    phoneShown.classList.toggle("header__icons-phoneNumberHidden")
    phoneShown.classList.toggle("header__icons-phoneNumberShown")
    
})

phoneShown.addEventListener("click",() => {
    phoneShown.classList.remove("header__icons-phoneNumberShown")
    phoneShown.classList.add("header__icons-phoneNumberHidden")
    // phone.classList.toggle("header__icons-phoneIconHidden")
})



const showButton = document.getElementById("showList")
const hideButton = document.getElementById("hideList")
const listPartTwo = document.getElementById("listSecondPart")

showButton.addEventListener("click", () => {
listPartTwo.style.display = "inline-block"
showButton.style.display = "none"
hideButton.style.display = "inline-block"
})

hideButton.addEventListener("click", () => {
    listPartTwo.style.display = "none"
    hideButton.style.display = "none"
    showButton.style.display = "inline-block"
})