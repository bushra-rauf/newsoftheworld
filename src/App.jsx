 import { articles } from './data/data'
 import Header from "./components/Header"
import { getImageUrl } from './utils/function'
import MenuBar from './components/MenuBar'


function App() {
  

  return (
    <>
      <Header/>
      <MenuBar/>
       {/* {articles.map((item, index) => <img key={index} src={getImageUrl(item.image)} ></img>)}  */}
    </>
  )
}

export default App
