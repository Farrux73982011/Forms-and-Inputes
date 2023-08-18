let form = document.forms.formm
let input = document.querySelectorAll('.osn')
let nv = document.querySelectorAll('.t_vip')
let btn = document.querySelector('.btn')

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
    phone: /^9989[012345789][0-9]{7}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}


function validation(regex, field) {
    if (regex.test(field.value)) {
        field.style.border = "2px solid blue"
    } else {
        field.style.border = "2px solid red"
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