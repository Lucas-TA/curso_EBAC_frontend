import { useEffect, useState } from "react";

const Form = () => {

    const [subjectA, setSubjectA] = useState(0);
    const [subjectB, setSubjectB] = useState(0);
    const [subjectC, setSubjectC] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('O estado mudou')
    }, [name])

    const result = () => {
        const sum = subjectA + subjectB + subjectC;
        const media = sum / 3;
        let resultMessage;

        switch(true) {
            case media > 7:
                return resultMessage = 'O aluno foi aprovado';
            case media >= 5:
                resultMessage = 'Recuperação';
                break;
            default:
                resultMessage = 'Reprovado';
        }
        return resultMessage;
    }
    const changeName = (e:any) => {
        setName(()=> {
            return e.target.value;
        })
    }

    return (
        <>
            <form>
                <input type="number" placeholder="Nota da matéria A" onChange={e => setSubjectA(parseFloat(e.target.value))}/>
                <input type="number" placeholder="Nota da matéria B" onChange={e => setSubjectB(parseFloat(e.target.value))}/>
                <input type="number" placeholder="Nota da matéria C" onChange={e => setSubjectC(parseFloat(e.target.value))}/>
                <input type="text" placeholder="Digite seu nome" onChange={changeName} />
                <p>{result()}</p>
            </form>
        </>
    )
}
export default Form;