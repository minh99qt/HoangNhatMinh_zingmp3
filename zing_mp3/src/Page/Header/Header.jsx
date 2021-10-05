import React from 'react'

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <button>
            <i class="fa fa-arrow-left"></i>
          </button>
          <button>
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div className="header__seach"></div>
        <i class="fa fa-search"></i>
        <input placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." name="tenBaiHat"></input>
      </div>
    </div>
  )
}
