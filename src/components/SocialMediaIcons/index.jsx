import { getImageUrl } from '../data/utils/function';
const SocialMediaIcons = ({socialMedia}) => {
    return (
         <div className= {styles.SocialMediaIcons}>
            {socialMedia.map((social, index) => <img key={index} src={getImageUrl(social.icon)} ></img>)}
         </div>
    )
}

export default SocialMediaIcons;