import "../../layout/Content/Content.css"
import ContentMain from "../ContentMain/ContentMain"
import ContentTop from "../ContentTop/ContentTop"

const Container = () => {
  return (
    <div className='main-content'>
        <ContentTop/>
        <ContentMain/>
    </div>
  )
}

export default Container
