import {getImageUrl} from '../data/utils/function'
import SocialMediaIcons from '../SocialMediaIcons';
import styles from './social.modole.css'
const Header = () => {
          return (
            <header className={styles.Header}>
             <div className={styles.icon}>
                  <img src={getImageUrl("facebook-icon.png")} alt="" />
             </div>
              <div className={styles.pageTitle}>
                <h1>News For Today</h1>
              </div>
              <div className={styles.phone}>
                <p>(989)717-515</p>
              </div>
            </header>
          );
        };
        
export default Header;
        
    
         

    
