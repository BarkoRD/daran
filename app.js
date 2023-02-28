
let account = document.querySelector('.init')
let mp = document.querySelector('.mp')
let title= document.querySelector('.title')
let win= undefined;

// D3trip@&
window.addEventListener('load',()=>{
	win = window.innerWidth;
	if (win < 420) {
	account.innerHTML = ''
	account.classList.replace('nav_texto','account')

}else if (win > 420) {
	account.innerHTML = 'Iniciar Sesion'
	account.classList.replace('mainpage','nav_texto')
}
})

window.addEventListener('resize',()=>{
	win = window.innerWidth;
	if (win < 420) {
	account.innerHTML = ''
	account.classList.replace('nav_texto','account')

}else if (win > 420) {
	account.innerHTML = 'Iniciar Sesion'
	account.classList.replace('account','nav_texto')
}
})

