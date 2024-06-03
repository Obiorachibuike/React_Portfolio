import React from 'react'

function Header() {
  return (
    <>
        <div className="header-cont">
            <div className="header-content">
                <div className="logo-cont">
                    <img src="/Codetech.jpg" alt="" className="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skill</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Header