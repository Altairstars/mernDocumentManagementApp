import React, {useState} from 'react';
import {FaSignInAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../Sidebar.css';

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sidebar-container">
      <div
        className={`sidebar ${isOpen ? 'open' : 'closed'}`}
        onMouseEnter={toggleSidebar}
        onMouseLeave={toggleSidebar}
      >
        <div>
        <li>
            <Link to='/login'>
                <FaSignInAlt /> Login
            </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
