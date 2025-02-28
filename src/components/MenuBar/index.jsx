import styles from './menubar.module.css'
const MenuBar = () => {
    return (
        <div className = {styles.menuBar}>
           <div className = {styles.menuList}>
            <a href="Home">Home</a>
            <a href="International">International</a>
            <a href="Business">Business</a>
            <a href="Politics">Politics</a>
            <a href="Technplogy">Technology</a>
            <a href="Fashion">Fashion</a>
            <a href="Corona">Corona</a>
            <a href="Video">Video</a>
            </div>
           <p>Monday, 02February 2023</p>
        </div>
    )
}

export default MenuBar