let form = document.forms.formm
let input = document.querySelectorAll('.osn')
let t_vip = document.querySelectorAll('.t_vip')
let btn = document.querySelector('.btn')

let inp = document.querySelectorAll('.osn')
form.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(inpform)

    fm.forEach((value, key) => {
        user[key] = value
    })


    input.forEach(inp => {
        
    if(inp.value.length === 0){
            inp.style.border = '2px solid red'

        btn.style.backgroundColor = 'red'
    }else{
        console.log(user);

    }
    })
    

    // console.log(user);
}
let patterns = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}


function validation(regex, field) {
    if (regex.test(field.value)) {
        // nv.style.color = 'blue'
        field.style.border = "2px solid blue"
    } else {
        // nv.style.color = 'red'
        field.style.border = "2px solid red"
    }
}
function validation2(regex, text) {
    console.log(regex);
    if (regex.test(text.value)) {
        text.style.color = 'blue'
    } else {
        text.style.color = 'red'
    }
}

input.forEach(inp => {
    inp.onkeyup = () => {
        if (inp.name === "age") {
            if (inp.value >= 16 && inp.value <= 160) {
                inp.style.border = "2px solid blue"
            } else {
                inp.style.border = "2px solid red"
            }
        } else {
            validation(patterns[inp.name], inp)
            validation2(patterns[t_vip.name], t_vip)
        }
    }
})

form.onsubmit = (e) => {
    e.preventDefault();

    if(input === '' && input === false) {
        console.log('alert');
    } else {
        submit(e)
    }
}



function submit(e) {
    let user = {}

    let fm = new FormData(e.target)

    fm.forEach((value, key) => {
        user[key] = value
    })
}

// let regex = {
//     name: /^[a-z ,.'-]+$/i,
//     phone: /^9989[012345789][0-9]{7}$/,
//     email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// }
// inp.onkeyup = () => {
//     if(regex.test(inp.value)) {
//         inp.style.borderColor = 'green'   
//     } else {
//         inp.style.borderColor = 'red'   
//     }
// }