const menu = document.querySelector('.div-menu');
const hambur =  document.querySelector('.hambur')
let busca = document.querySelector('.buscar');
let lupa = document.querySelector('.lupa');
let btnfechar =  document.querySelector('.btn-fechar');

hambur.addEventListener('click', ()=> { menu.classList.toggle('abrir-menu')}
);
lupa.addEventListener('click', ()=> {
    busca.classList.add('abrir-bar')
});

btnfechar.addEventListener('click', ()=> {
    busca.classList.remove('abrir-bar')
});