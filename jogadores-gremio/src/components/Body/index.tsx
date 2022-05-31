import './style.css'
import { useState } from 'react';
const Body = () => {

    const jogadores = [{
        name: "Gabriel Grando",
        position: "goleiro"
    }, {
        name: "Brenno",
        position: "goleiro"
    }, {
        name: "Phelipe Megiolaro",
        position: "goleiro"
    }, {
        name: "Adriel",
        position: "goleiro"
    }, {
        name: "Kannemann",
        position: "zagueiro"
    }, {
        name: "Geromel",
        position: "zagueiro"
    }, {
        name: "Bruno Alves",
        position: "zagueiro"
    }, {
        name: "Diogo Barbosa",
        position: "lateral esquerdo"
    }, {
        name: "Rodrigues",
        position: "zagueiro"
    }, {
        name: "Nícolas",
        position: "lateral esquerdo"
    }, {
        name: "Léo Gomes",
        position: "lateral direito"
    }, {
        name: "Edílson",
        position: "lateral direito"
    }, {
        name: "Rodrigo Ferreira",
        position: "lateral direito"
    }, {
        name: "Heitor",
        position: "zagueiro"
    }, {
        name: "Gustavo Marins",
        position: "zagueiro"
    }, {
        name: "Natã",
        position: "zagueiro"
    }, {
        name: "Lucas Kawan",
        position: "lateral direito"
    }, {
        name: "Cuiabano",
        position: "lateral esquerdo"
    }, {
        name: "Thiago Rosa",
        position: "lateral esquerdo"
    }, {
        name: "Ferreira",
        position: "atacante"
    }, {
        name: "Benítez",
        position: "meia"
    }, {
        name: "Jaminton Campaz",
        position: "meia"
    }, {
        name: "Lucas Silva",
        position: "volante"
    }, {
        name: "Mathias Villasanti",
        position: "volante"
    }, {
        name: "Janderson",
        position: "atacante"
    }, {
        name: "Thiago Santos",
        position: "volante"
    }, {
        name: "Pedro Lucas",
        position: "meia"
    }, {
        name: "Biel",
        position: "meia"
    }, {
        name: "Victor Bobsin",
        position: "volante"
    }, {
        name: "Bitello",
        position: "meia"
    }, {
        name: "Fernando Henrique",
        position: "volante"
    }, {
        name: "Michel",
        position: "volante"
    }, {
        name: "Matheus Frizzo",
        position: "volante"
    }, {
        name: "Matheus Sarará",
        position: "volante"
    }, {
        name: "Gabriel Silva",
        position: "meia"
    }, {
        name: "Ronald",
        position: "volante"
    }, {
        name: "Jhonata Varela",
        position: "volante"
    }, {
        name: "Jhonata Robert",
        position: "atacante"
    }, {
        name: "Diego Souza",
        position: "atacante"
    }, {
        name: "Elkeson",
        position: "atacante"
    }, {
        name: "Ricardinho",
        position: "atacante"
    }, {
        name: "Elias Manoel",
        position: "atacante"
    }, {
        name: "Kevin",
        position: "atacante"
    }];
    type Props = {
        number: string;
        cvc: string;
        date: string;
    }
    const [creditCard, setCreditCard] = useState<Props>({
        number: '',
        cvc: '',
        date: ''
    })
    
    
    const points = (creditCard: string) => {
        creditCard = creditCard.replace(/[^0-9]/g, '');
    let out = '';
    let valids = 0;//número de caracteres válidos até o momento.
    for(let i = 0; valids < 19 && i < creditCard.length; i++){
        let caract = creditCard[i];
        switch(valids){
            case 4:
            case 9:
            case 14:
                //adicionar ponto
                if(caract != '.') caract = `.${caract}`;
                valids += 2;
                break;
            default:
                valids += 1;
                break;
        }
        out = `${out}${caract}`;
    }
    return out;
    }
    const result = () => {
        /*A conta criada é para gerar um resultado bem aleatório, mas de modo que caso a pessoa insira os mesmos dados o resultado seja o mesmo.
        A função consiste em dividir os números do cartão em quatro unidades e somar todas elas. Após isto, serão somados os números finais do ano
        de vencimento do cartão e dividir a soma total pelo código de segurança. Para não haver tanta repetição de resultados, multiplicaremos o resultado por 1000,
        e pegar o resto da divisão pelo tamanho do array de objetos jogadores.*/
        let creditCardNumber = creditCard.number.split(".");
        let sumCreditCard = Number(creditCardNumber[0]) + Number(creditCardNumber[1]) + Number(creditCardNumber[2]) + Number(creditCardNumber[3]);
        let date = Number(creditCard.date.substring(creditCard.date.length - 2));
        let sum = sumCreditCard + date;
        let divide = sum / Number(creditCard.cvc);
        let multiply = divide * 1000;
        let rest = Math.round(multiply % jogadores.length);
        alert(`Você é o ${jogadores[rest].position} ${jogadores[rest].name}`);
    }
    return(
        <div className="container">
            <div className="body">
                <h3>Dados do cartão:</h3>
                <input type="text" id="name" value={creditCard.number} required placeholder="Número do cartão..." onChange={(e)=> {
                    setCreditCard({
                        ...creditCard, 
                        number: points(e.target.value)
                    })
                }}></input>
                <input type="text" id="number" value={creditCard.cvc} required maxLength={3} placeholder="Os três números atrás..." onChange={(e)=> {
                    setCreditCard({
                        ...creditCard, 
                        cvc: e.target.value
                    })
                }}></input>
                <input type="month" value={creditCard.date} required id="date" /*{creditCard.date.length -4 < 2022 && alert("Insira uma data válida")}*/ onChange={(e)=> {
                    setCreditCard({
                        ...creditCard, 
                        date: e.target.value
                    })
                }}></input>
            </div>
            <div>
                <button className="button" onClick={result}>Resultado</button>
            </div>
            <div className="button-selector">
                <button className="button-dark">Dark mode</button>
                <button className="button-light">Light mode</button>
            </div>
        </div>
    );
}
export default Body;