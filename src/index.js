import axios from 'axios';
import Trivia from './Game';
import './styles/main.scss';

(() => {
    const pregu = document.getElementById('qqq');
    const booleano = document.getElementById('boolean');
    const multiple = document.getElementById('multiple');
    pregu.innerHTML = '';
    booleano.innerHTML = '';
    multiple.innerHTML = '';
})();


const aceptar = document.getElementById('next');

aceptar.addEventListener('click', function quest() {
    const pregu = document.getElementById('qqq');
    const booleano = document.getElementById('boolean');
    const multiple = document.getElementById('multiple');

    if (pregu.innerHTML === '') {
        let categoria = document.getElementById('catego');
        let dificultad = document.getElementById('diff');
        let tipo = document.getElementById('typo');

        const URL_BASE = 'https://opentdb.com/api.php?amount=10';
        const catego = `&category=${categoria.value}`
        const diff = `&difficulty=${dificultad.value}`
        const typo = `&type=${tipo.value}`

        axios.get(URL_BASE + catego + diff + typo)
            .then((response) => {
                console.log('data owo');
                //console.log(response.status);
                //console.log(response.data.results);
                const game = new Trivia(response.data.results);
                game.idk();
                console.log(game.obtenerPregunta());
                console.log(game.generaRandomPos());
                console.log(game.opcionCorrecta);
                console.log(game.opcionesIncorrectas);
                console.log(game.juntarOpciones());
                console.log(game.acomodarOpciones());
                console.log(game);
            })
            .catch((error) => {
                console.log('hubo un problema ');
            })
    } else {
        alert('esto reinicia todo seguiro de continuar?')
        pregu.innerHTML = '';
        booleano.innerHTML = '';
        multiple.innerHTML = '';
    }
});