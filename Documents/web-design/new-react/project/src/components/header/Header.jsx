import React from 'react';
import logoImg from './../../img/icons/logo.svg';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_row}>
          <div className={styles.header_logo}>
            <img src={logoImg} alt="Logo" />
            <span>QU'RAN</span> 
          </div>
          <nav className={styles.header_nav}>
              <ul className={styles.navList}>
                  <li className={styles.navItem}><a href="#!">Home</a></li>
                  <li className={styles.navItem}><a href="#!">About Us</a></li>
                  <li className={styles.navItem}><a href="#!">Pages</a></li>
                  <li className={styles.navItem}><a href="#!">Saved</a></li>
                  <li className={styles.navItem}><a href="#!">Contacts</a></li>
                  <li className={styles.navItem}><button className={styles.joinBtn}>Join Us</button></li>
                  <li className={styles.navItem}><input type="search" placeholder="Search" className={styles.searchInput} /></li>
              </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;