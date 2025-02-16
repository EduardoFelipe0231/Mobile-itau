// =========================================================================== Animação edit
let menuTitle = document.getElementById('menu-title-edit');
let btnEdit = document.getElementById('btn-edit');
let iconEdit = document.getElementById('changeAccountLogo');

btnEdit.addEventListener("click", () =>{
    if(menuTitle.innerText === "Contas Salvas"){
        menuTitle.innerText = "De qual conta quer sair?"
        iconEdit.classList.replace('fa-lock', 'fa-arrow-right-from-bracket')
    } else {
        menuTitle.innerText = "Contas Salvas"
        iconEdit.classList.add('fa-lock')
        // changeAccountLogo.classList.remove('fa-arrow-right-from-bracket')
    }
    

    console.log(iconEdit)
})

// =========================================================================== Animação menu subindo/aparecendo
let arrowMenuAccount = document.getElementById('arrowMenuAccount');
let menu = document.querySelector('div.menu');

arrowMenuAccount.addEventListener('click', (e) =>{
    menu.classList.toggle('menu-on')   
    iconArrow(); 

})

// =========================================================================== Animação Icone e close btn X

let btnClose = document.getElementById('btn-close');

btnClose.addEventListener('click', closeMenu);

function closeMenu(){
    menu.classList.toggle('menu-on')
    iconArrow();  
}

function iconArrow(){
    if(arrowMenuAccount.classList.contains('fa-angle-down')){
        arrowMenuAccount.classList.replace('fa-angle-down', 'fa-angle-up')
    } else {
        arrowMenuAccount.classList.replace('fa-angle-up', 'fa-angle-down')
    }
}


// =========================================================================== HORA
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let today = new Date();

hour.innerHTML = (today.getHours()<10?"0":"") + today.getHours();
minute.innerHTML = (today.getMinutes()<10?"0":"") + today.getMinutes();


