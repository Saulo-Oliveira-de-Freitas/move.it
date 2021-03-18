import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
   const{level}=useContext(ChallengesContext);
   
    return(
    <div className={styles.profileContainer}>
        <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.W1fDzc69LNG8XTNGzl6KXwHaHa%26pid%3DApi&f=1" alt="Saulo Freitas"/>
        </div>
        <div>
            <strong>Saulo Freitas</strong>
            <p>Level {level}</p>
        </div>
    
    </div>
       
    )
}