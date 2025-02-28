import styles from './header.module.css';
import { getImageUrl } from '../../utils/function';
import SocialMediaIcons from '../SocialMediaIcons';
// import styles from './social.modole.css'
const Header = () => {
          return (
            <header className={styles.Header}>
               <SocialMediaIcons/>
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
        
    
         

    
