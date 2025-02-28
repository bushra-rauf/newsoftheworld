import styles from './social.module.css'
import { getImageUrl } from "../../utils/function";
const SocialMediaIcons = () => {
    const socialMediaLinks = [
        { name: 'facebook', image: 'facebook-icon.png'},
        { name: 'twitter', image: 'twitter-icon.jpeg'},
        { name: 'instagram', image: 'instagram-icon.png'},
        { name: 't-icon', image: 't-icon.jpeg'}
    
    ]
       
    return (
         <div className= {styles.SocialMediaIcons}>
            {/* <img src={getImageUrl("facebook-icon.png")} alt="" /> */}
            {socialMediaLinks.map((social, index) => <img key={index} src= {`${getImageUrl(social.image)}`} alt={social.name}></img>)}
         </div>
    )
}

export default SocialMediaIcons;