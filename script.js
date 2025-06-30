let tabs = document.getElementsByClassName("tab-titles")
let tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tab of tabs){
        tab.classList.remove("active-link")
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzm6IFCJDzxGdAKOnoRAHFbadOYfBNF5R03DZJ0Uroi-IGiMEPHuF5NmWVV0Zhh0FbR/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg");

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },4000)
//         form.reset()
//     })
//       .catch(error => console.error('Error!', error.message))
// })

var sidebar = document.getElementById("sidebar");

function openmenu(){
    sidebar.style.right = "0";
}
function closemenu(){
    sidebar.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzXXu8OkfosYOWBDhTnuCeoKKxth7CdmGdfTCKxMAJgDUmIvoskN8ymOF8BklcvOJkzWg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
    })
    form.reset()
    .catch(error => console.error('Error!', error.message))
})

