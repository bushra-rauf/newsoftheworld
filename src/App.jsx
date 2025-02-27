 import { articles } from './data/data'
 import Header from "./components/Header"
import {getImageUrl} from './data/utils/function.js'
import SocialMediaIcons from './components/SocialMediaIcons'


function App() {
  

  return (
    <>
      <Header/> 
       {articles.map((item, index) => <img key={index} src={getImageUrl(item.image)} ></img>)} 
    </>
  )
}

export default App
