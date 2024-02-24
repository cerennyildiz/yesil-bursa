import React from 'react';
import airquality from '../../assets/air-quality.png';
import market from '../../assets/market.png';
import activity from '../../assets/activity.png';
import recycle from '../../assets/recycle.png';
import './contents.css';
import { Link } from 'react-router-dom';

const Contents = () => (
  <div className="yb__content-container">
    <div className="yb__content section__padding " id="content">
      <div className="yb__content-image yb__content-image-left">
        <img src={airquality} alt="content" />
      </div>
      <div className="yb__content-content">
        <h1 className="gradient__text_h">Hava Kalitesi Takibi</h1>
        <p>
          Hava kalitesi, sağlığımızı etkileyen önemli bir faktördür. Gerçek
          zamanlı hava kalitesini takip edebilir, hava kirliliği seviyelerini
          öğrenerek günlük aktivitelerinizi planlayabilirsiniz. Sağlıklı bir
          yaşam için temiz hava koşullarını sürekli olarak kontrol altında
          tutun.
        </p>
        <div className="yb__content-btn">
          <Link to={'/map'}>
            <button type="button">Keşfet</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="yb__content section__padding" id="content">
      <div className="yb__content-content ">
        <h1 className="gradient__text_h">Doğa Dostu Etkinlikler</h1>
        <p>
          Doğayı korumak ve çevreye duyarlı yaşam pratiğini benimsemek için
          düzenlenen etkinliklere katılmak, hem kişisel gelişiminize katkı
          sağlar hem de doğal yaşamı korumaya destek olur. Çevre dostu
          etkinliklerden size en uygun olanlarını seçin. Doğayla bütünleşerek
          keyifli vakit geçirin ve gelecek nesillere temiz bir çevre bırakmak
          için adım atın.
        </p>
        <div className="yb__content-btn">
          <Link to={'/map'}>
            <button type="button">Keşfet</button>
          </Link>
        </div>
      </div>
      <div className="yb__content-image yb__content-image-right">
        <img src={activity} alt="activity" />
      </div>
    </div>

    <div className="yb__content section__padding  recycle" id="content">
      <div className="yb__content-image yb__content-image-left">
        <img
          className="yb__content-image-recycle"
          src={recycle}
          alt="recycle"
        />
      </div>
      <div className="yb__content-content">
        <h1 className="gradient__text_h">Atık Yönetimi ve Dönüşüm</h1>
        <p>
          Atık yönetimi, sürdürülebilir bir çevre için hayati öneme sahiptir.
          Yakınınızdaki atık dönüşüm alanlarını kolayca bulun. Atıklarınızı
          doğru şekilde yöneterek geri dönüşüme katkıda bulunun ve kaynakları
          yeniden kullanarak çevreye olan etkinizi azaltın. Küçük bir adım,
          büyük bir fark yaratabilir.
        </p>
        <div className="yb__content-btn">
          <Link to={'/map'}>
            <button type="button">Keşfet</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="yb__content section__padding" id="content">
      <div className="yb__content-image yb__content-image-left">
        <img src={market} alt="market" />
      </div>
      <div className="yb__content-content">
        <h1 className="gradient__text_h">Yerel Ürün Pazarları</h1>
        <p>
          Yerel ürünler, hem çevreye duyarlı bir tüketim alışkanlığı hem de
          yerel ekonomiyi destekleme açısından önemlidir. Size yakın olan yerel
          ürün pazarlarını keşfedin. Sağlıklı ve doğal ürünlere erişim
          sağlayarak hem kendi sağlığınızı koruyun hem de yerel üreticilere
          destek olun.
        </p>
        <div className="yb__content-btn">
          <Link to={'/map'}>
            <button type="button">Keşfet</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contents;
