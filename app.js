
let account = document.querySelector('.init')
let mp = document.querySelector('.mp')


let buttonr = document.querySelector('.buttonr')
let buttonl = document.querySelector('.buttonl')
let cajalogin = document.querySelector('.cajalogin')
var formReg;
var formLog;
var activelogin= false;
var activeregister= false;
const clean = cajalogin.innerHTML;

buttonr.addEventListener('click',()=>{
	if (activelogin) {
		cajalogin.removeChild(formLog);
		cajalogin.classList.remove('buttonlogin')

		activeregister=true;
		activelogin=false;
		cajalogin.classList.add('buttonregister')

				formReg = document.createElement('form');

				let input1 = document.createElement('input');
				input1.classList.add('input', 'inv');
				input1.type = 'text';
				input1.placeholder = 'Nombre De Usuario';
				let input2 = document.createElement('input');
				input2.classList.add('input', 'inv');
				input2.type = 'password';
				input2.placeholder = 'Contraseña';
				let input3 = document.createElement('input');
				input3.classList.add('input', 'inv');
				input3.type = 'email';
				input3.placeholder = 'Email';
				let input4 = document.createElement('input');
				input4.classList.add('input', 'inv');
				input4.type = 'tel';
				input4.placeholder = 'Numero Telefonico';
				let input5 = document.createElement('input');
				input5.classList.add('rg', 'inv');
				input5.type = 'submit';
				input5.value = 'Registrarse';

				formReg.appendChild(input1);
				formReg.appendChild(input2);
				formReg.appendChild(input3);
				formReg.appendChild(input4);
				formReg.appendChild(input5);

				cajalogin.appendChild(formReg);
				

	setTimeout(()=>{
	let input = document.querySelectorAll('.inv');
    input.forEach((e)=>{
      e.classList.add('show');
    });
  }, 525);

	}else if (activeregister){
		alert('Por Favor Registrese')
		activelogin=false;
	}else{
		activeregister=true;
		activelogin=false;
		cajalogin.classList.add('buttonregister')

				formReg = document.createElement('form');

				let input1 = document.createElement('input');
				input1.classList.add('input', 'inv');
				input1.type = 'text';
				input1.placeholder = 'Nombre De Usuario';
				let input2 = document.createElement('input');
				input2.classList.add('input', 'inv');
				input2.type = 'password';
				input2.placeholder = 'Contraseña';
				let input3 = document.createElement('input');
				input3.classList.add('input', 'inv');
				input3.type = 'email';
				input3.placeholder = 'Email';
				let input4 = document.createElement('input');
				input4.classList.add('input', 'inv');
				input4.type = 'tel';
				input4.placeholder = 'Numero Telefonico';
				let input5 = document.createElement('input');
				input5.classList.add('rg', 'inv');
				input5.type = 'submit';
				input5.value = 'Registrarse';

				formReg.appendChild(input1);
				formReg.appendChild(input2);
				formReg.appendChild(input3);
				formReg.appendChild(input4);
				formReg.appendChild(input5);

				cajalogin.appendChild(formReg);
				

	setTimeout(()=>{
	let input = document.querySelectorAll('.inv');
    input.forEach((e)=>{
      e.classList.add('show');
    });
  }, 525);

}

})


buttonl.addEventListener('click',()=>{
if (activeregister) {
		cajalogin.removeChild(formReg);
		cajalogin.classList.remove('buttonregister')
		activelogin=true;
		activeregister=false;

	cajalogin.classList.add('buttonlogin')

	formLog = document.createElement('form');

		let input1 = document.createElement('input');
		input1.classList.add('input', 'inv');
		input1.type = 'text';
		input1.placeholder = 'Nombre De Usuario';

		let input2 = document.createElement('input');
		input2.classList.add('input', 'inv');
		input2.type = 'password';
		input2.placeholder = 'Contraseña';

		let input3 = document.createElement('input');
		input3.classList.add('rg', 'inv');
		input3.type = 'submit';
		input3.value = 'Registrarse';

		formLog.appendChild(input1);
		formLog.appendChild(input2);
		formLog.appendChild(input3);

		cajalogin.appendChild(formLog);

	setTimeout(()=>{
	let input = document.querySelectorAll('.inv');
    input.forEach((e)=>{
      e.classList.add('show');
    });
  }, 525);


	}else if (activelogin){
		alert('Por Favor Inicie Sesion')
		activeregister=false;
	}else{
		activelogin=true;
		activeregister=false;

	cajalogin.classList.add('buttonlogin')

	formLog = document.createElement('form');

		let input1 = document.createElement('input');
		input1.classList.add('input', 'inv');
		input1.type = 'text';
		input1.placeholder = 'Nombre De Usuario';

		let input2 = document.createElement('input');
		input2.classList.add('input', 'inv');
		input2.type = 'password';
		input2.placeholder = 'Contraseña';

		let input3 = document.createElement('input');
		input3.classList.add('rg', 'inv');
		input3.type = 'submit';
		input3.value = 'Registrarse';

		formLog.appendChild(input1);
		formLog.appendChild(input2);
		formLog.appendChild(input3);

		cajalogin.appendChild(formLog);

	setTimeout(()=>{
	let input = document.querySelectorAll('.inv');
    input.forEach((e)=>{
      e.classList.add('show');
    });
  }, 525);

}
})






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