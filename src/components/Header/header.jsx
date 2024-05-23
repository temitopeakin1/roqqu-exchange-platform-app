import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.png'
import { FaGlobe } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './header.scss'

const Header = () => {
  return (
    <header className="nav">
      <img src={logo} alt="Logo" />
      <div className="menu-items-left">
        <h2 className="first-menu-item">Exchange</h2>
        <h2 className="second-menu-item">Wallets</h2>
        <h2 className="third-menu-item">Roqqu Hub</h2>
      </div>
      <div className="menu-items-right">
        <div className="profile">
          <img src={profile} alt="Profile" />
          <p className="profile-name">Olakunle</p>
          <MdOutlineKeyboardArrowRight />
        </div>
        <FaGlobe />
        <BiLogOut />
      </div>
      <hr />
    </header>
  )
}

export default Header
