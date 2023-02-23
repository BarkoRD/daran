
let account = document.querySelector('.init')

let mp = document.querySelector('.mp')

let win= undefined;
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

window.addEventListener('resize',()=>{
	win = window.innerWidth;
	if (win < 420) {
	mp.innerHTML = ''
	mp.classList.replace('nav_texto','mainpage')

}else if (win > 420) {
	mp.innerHTML = 'Iniciar Sesion'
	mp.classList.replace('mainpage','nav_texto')
}
})













// las condicionales son funciones(las funciones son cosas que hacen cosas)
// son funciones que ejecutan su codigo interior SOLO SI
// se cumple una condicion exacta
// osea
// como el nombre indica
// las condicionales son condicionales xd
// entendio ?