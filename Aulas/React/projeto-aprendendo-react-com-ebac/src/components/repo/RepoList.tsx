import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

interface Repository {
    name: string;
    language: string;
    html_url: string;
    id: any;
    // Outras propriedades do repositório, se aplicável
}
interface Props {
    userName: string;
}

const ReposList:React.FC<Props> = ({userName}) => {

    const url = `https://api.github.com/users/${userName}/repos`

    const [repos, setRepos] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        fetch(url)
            .then( res => res.json())
            .then( json => {
                setRepos(json);
                setIsLoading(false)
            })
    }, [userName])

    return (
        <div className="container">
            {isLoading ? (
                <h3>Loading</h3>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({id, name, language, html_url}) => (
                        <li key={id} className={styles.listItem}>
                            <div className={styles.listItemName}>
                                <b>Nome:</b> 
                                {name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem:</b> 
                                {language}
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no github</a>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    )
}
export default ReposList;