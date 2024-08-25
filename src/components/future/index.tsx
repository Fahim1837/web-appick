import './index.css'
import construction from './under-construction.png'

function Future() {
  return (
    <div className='body bluebg'>
    <img src={construction} className="imgcenter" />
    <p className="txtwhite">The website is <a className="txtlightyellow">under construction.</a></p>
    <p className="txtwhite">Kindly visit after some time.&nbsp;<strong> Thank You!</strong></p> 
    </div>
  )
}

export default Future
