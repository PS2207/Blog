import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://source.unsplash.com/2000x1400/?tech" alt="" />
    </div>
  )
}
