import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {
    return ( 
    <>
        <Heading>
            Olá Mundoo! 
            <button>
                <TimerIcon/>
            </button>
        </Heading>
        <p>
            Eu sou o Fellipe e estou aprendendo react!
            Obrigado por me apoiar no canal e quero aprender muito 
            a programar, principalmente next.js
        </p>
    </>
    );
}