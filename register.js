let userEl = document.getElementById('user')
let passEl = document.getElementById('pass')
let genderEl = document.getElementById('gender')
let btnEl = document.getElementById('btn')


async function getToken(user){
    console.log(user)
    let res = await fetch('https://pressa-exem.herokuapp.com/register',{
        method:'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
    })

    res = await res.json()
    console.log(res)
    if(res.token && res.token !== null){
        localStorage.setItem('token',res.token)
        location.replace('./index.html')
    }
}


btnEl.addEventListener('click',() =>{
    const user = {
        username: userEl.value,
        password:passEl.value,
        gender:genderEl.value
    }
    getToken(user)
})