class Trivia {
    constructor(arrayQuestions) {
        this.arrayQuestions = arrayQuestions;
        this.questions = [];
        this.answers = [];
        this.finalAnwers = [0, 0, 0, 0];
        this.correctAnswer;
        this.arrayTorF = ['True', 'False'];
        this.state = false;
        this.isOk = false;
    }
    get primerLugardellArray() {
        const pregunta = this.arrayQuestions[0].question;
        return pregunta;
    }
    obtenerPregunta() {
        const preguntaso = this.primerLugardellArray;
        return preguntaso;
    }
    generaRandomPos(length) {
        const position = Math.floor(Math.random() * (length - 0)) + 0;

        return position;
    }
    get opcionesIncorrectas() {
        const incorrectOptions = this.arrayQuestions[0].incorrect_answers;
        return incorrectOptions;
    }
    get opcionCorrecta() {
        const correctOption = this.arrayQuestions[0].correct_answer;
        return correctOption;
    }
    juntarOpciones() {
        const correct = this.opcionCorrecta;
        const incorrect = this.opcionesIncorrectas
        this.answers = incorrect;
        this.answers.push(correct);
        return this.answers;
    }
    acomodarOpciones() {
        for (let i = 0; i < this.finalAnwers.length; i++) {

            let rnd = this.generaRandomPos(this.answers.length);
            this.finalAnwers[i] = this.answers[rnd];
            this.answers.splice(rnd, 1);

        }
        return this.finalAnwers;
    }


    botonOpcionMultiple(respuestas, cb) {
        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = respuestas;
        button.id = respuestas;
        button.value = respuestas;
        button.addEventListener('click', cb)

        return button;

    }
    botonReset(any, cb) {
        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = any;
        button.id = any;
        button.value = any;
        button.addEventListener('click', cb)
        return button;
    }

    restart() {
        this.arrayQuestions.shift();
        this.start();
    };
    compruebaestado(estate) {
        if (estate === true) {
            this.restart();
        }
    };

    generaRespuestas(papa, clickboton) {
        this.arrayQuestions.shift();
        this.juntarOpciones();
        this.acomodarOpciones();

        this.finalAnwers = this.acomodarOpciones();
        this.finalAnwers.forEach(opcion => {
            const otpsett = this.botonOpcionMultiple(opcion, clickboton);
            papa.appendChild(otpsett);
        })
        console.log('kepedo');

    };

    start() {
        const pregun = document.getElementById('qqq');
        const ala = document.getElementById('ala_chaval');
        const papa2 = document.getElementById('boolean');
        const papa1 = document.getElementById('multiple');
        papa2.innerHTML = '';
        papa1.innerHTML = '';
        pregun.innerHTML = this.obtenerPregunta();
        if (document.getElementById('typo').value === 'multiple') {
            this.state = false;
            this.juntarOpciones();
            this.finalAnwers = this.acomodarOpciones();


            const clickboton = (event) => {
                this.state = true;
                if (this.opcionCorrecta === event.target.value) {
                    ala.innerHTML = 'o:';

                    this.arrayQuestions.shift();
                    this.start();
                    console.log(this.arrayQuestions);

                } else {
                    ala.innerHTML = 'no mames carnal que pedo';
                }
            }
            this.finalAnwers.forEach(opcion => {
                const otpsett = this.botonOpcionMultiple(opcion, clickboton);
                papa1.appendChild(otpsett);
            });


        } else {
            const clickboton = (event) => {

                if (this.opcionCorrecta === event.target.value) {
                    ala.innerHTML = ' o:';
                } else {
                    ala.innerHTML = 'no mames carnal que pedo';
                }
            }
            this.arrayTorF.forEach(opcion => {
                const otpsett = this.botonOpcionMultiple(opcion, clickboton);
                papa2.appendChild(otpsett);
            })
        }
    }
    next() {
        const papadelboton = document.getElementById('aiura');
        papadelboton.innerHTML = '';
        const clickboton2 = (event) => {
            this.state = true;

            this.restart();
        }
        const btn = this.botonReset('next', clickboton2);
        papadelboton.appendChild(btn);
    }
    idk() {

        this.start();
        this.next();
    };

}


export default Trivia;
/* const op1 = document.getElementById('option1');
        const op2 = document.getElementById('option2');
        const op3 = document.getElementById('option3');
        const op4 = document.getElementById('option4');
        op1.innerHTML = this.finalAnwers[0];
        op1.value = this.finalAnwers[0];
        op2.innerHTML = this.finalAnwers[1];
        op2.value = this.finalAnwers[1];
        op3.innerHTML = this.finalAnwers[2];
        op3.value = this.finalAnwers[2];
        op4.innerHTML = this.finalAnwers[3];
        op4.value = this.finalAnwers[3]; */
//ola