let content = document.querySelector('#content')
let h2 = document.querySelector('h2')
let inp = document.querySelector('#inp')
let btn = document.querySelector('#btn')
let his = document.querySelector('#history')

function addcode() {
     //create wrapper div
    let wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

     // Create new div element
    let newdiv = document.createElement('div')
    newdiv.textContent = inp.value
    if (his.children.length>15) {
        his.removeChild(his.firstChild)}

     // Create checkbox
    let check = document.createElement('div')
    check.classList.add('check')
    check.addEventListener('click',function() {
        newdiv.style.textDecoration = 'line-through'
        newdiv.style.color = 'rgb(79, 112, 112)'

    })

    // Create delete button
    let delbtn = document.createElement('button')
    delbtn.textContent = 'Delete'
    delbtn.classList.add('delbtn')

    // Add event listener to delete button
     delbtn.addEventListener('click',function() {
        his.removeChild(wrapper)
        // his.removeChild(check)
        // his.removeChild(delbtn)
     })
     
    // Append elements to history
    wrapper.appendChild(check);
    wrapper.appendChild(newdiv);
    wrapper.appendChild(delbtn);

    his.appendChild(wrapper);
    }

btn.addEventListener('click',function() {
       if (inp.value.trim() !== '') {
        addcode();
        inp.value = '';
       }else {}
   
})