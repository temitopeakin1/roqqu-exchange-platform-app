import bitcoin from '../../assets/bitcoin.svg'
import dollar from '../../assets/dollar.svg'
import './subheader.scss'

const Subheader = () => {
  return (
    <header className="subheader">
      <img src={bitcoin} alt="Bitcoin" className="icon" />
      <img src={dollar} alt="Dollar" className="icon" />
      
    </header>
  )
}

export default Subheader
