import styles from './Perfil.module.css';

interface Props {
    userName: string;
}

const Perfil: React.FC<Props> = ({userName}) => {

    return (
        <>
        <header className={styles.header}>
            <img src={`https://github.com/${userName}.png`} alt="Foto de perfil" className={styles.avatar}/>
            <h1 className={styles.name}>{ userName }</h1>
        </header>
        </>
    )
}

export default Perfil;