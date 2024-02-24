import React from 'react';
import './header.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import file from '../../assets/file.jpg';

const Header = () => (
  <div className="yb__header section__padding_h " id="home">
    <div className="yb__header-bg"></div>
    <div className="yb__header-img">
      <img src={file} alt="" />
    </div>
    <div className="yb__header-content">
      <h1 className="gradient__text">Çevreni Keşfet!</h1>
      <p>
        Temiz hava, yeşil enerji ve doğal yaşam için önemli adımlar atmanın tam
        zamanı! Doğayla iç içe bir yaşam tarzını benimsemek için harekete geç.
        Çevrendeki yeşil alanları, geri dönüşüm fırsatlarını ve daha fazlasını
        öğren.
      </p>
      <div className="yb__header-content__input">
        <Link to={'/map'}>
          <button type="button">Keşfet</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
