import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { RiMenuSearchLine, RiCloseCircleFill } from 'react-icons/ri'; // Import react-icons

import avatar from '../assets/images/avt.jpg';

const Header = () => {

  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState(false); // State để quản lý trạng thái của menu
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 1, key: 'home' },
    { id: 2, key: 'about' },
    { id: 3, key: 'projects' },
    { id: 4, key: 'experience' },
    { id: 5, key: 'contact' },
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <div className='py-2 flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-full'>
        {/* Bên trái (Avatar + Họ tên) */}
        <div className='flex space-x-2 items-center'>
          <img src={avatar} alt="avatar" className='w-10 h-10 sm:w-12 sm:h-12 rounded-full ' />
          <h1 className='hidden sm:block font-semibold text-lg sm:text-xl cursor-pointer max-w-full'>
            Le Huy <span className='text-green-500 text-xl sm:text-2xl'> Hoang </span>
            <p className='text-sm'>Front-End Developer</p>
          </h1>
        </div>

        {/* Laptop & iPad (Hiển thị menu trên màn hình lớn) */}
        <div className='hidden md:flex items-center space-x-6'>
          <nav className='flex space-x-4'>
            {navItems.map(e => (
              <Link
                key={e.id}
                to={e.key}
                smooth={true}
                offset={-70}
                className={`relative hover:scale-105 duration-200 cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 ${activeNav === e.key ? 'after:w-full' : 'after:w-0'
                  }`}
                onClick={() => setActiveNav(e.key)}
              >
                {t(`nav.${e.key}`)}
              </Link>
            ))}
          </nav>
          {/* Dropdown chọn ngôn ngữ */}
          <select
            className="bg-gradient-to-r from-green-400 to-blue-500  hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer"
            onChange={handleLanguageChange}
            defaultValue={i18n.language || 'en'}
          >
            <option value="vn">VN</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* Mobile (Hiển thị biểu tượng menu trên màn hình nhỏ) */}
        <div className='flex md:hidden items-center space-x-4'>
          {/* Dropdown chọn ngôn ngữ */}
          <select
            className="bg-gradient-to-r from-green-400 to-blue-500  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer"
            onChange={handleLanguageChange}
            defaultValue={i18n.language || 'en'}
          >
            <option value="vn">VN</option>
            <option value="en">EN</option>
          </select>

          {/* Nút mở/đóng menu */}
          <div onClick={() => setMenu(!menu)} className='cursor-pointer'>
            {menu ? <RiCloseCircleFill size={24} /> : <RiMenuSearchLine size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hiển thị menu khi mở) */}
      {menu && (
        <div className='bg-white md:hidden fixed top-0 left-0 w-full h-full z-50 overflow-y-auto'>
          <ul className='flex flex-col items-center justify-center h-full space-y-3 text-xl'>
            {navItems.map(e => (
              <li
                key={e.id}
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
              >
                <Link
                  onClick={() => {
                    setActiveNav(e.key);
                    setMenu(false); // Đóng menu khi chọn mục
                  }}
                  to={e.key}
                  smooth={true}
                  offset={-70}
                  className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 ${activeNav === e.key ? 'after:w-full' : 'after:w-0'
                    }`}
                >
                  {t(`nav.${e.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
