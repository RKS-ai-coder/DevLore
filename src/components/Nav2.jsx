import catImage from '../assets/cat.jpg'

function Nav2() {
  return(
    <nav className="primary-nav">
      <div className="logo">
        <h2>DevLore</h2>
      </div>
      <div className="settings">
        <div className="profile-name">rocks_d_rahul</div>
        <img src={catImage} alt="profile-pic" class="profile-pic" />
      </div>
    </nav>
  )
}

export default Nav2