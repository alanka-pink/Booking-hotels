import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Đà Lạt</span>
        <span className="fpPrice">Giá từ 1.200.000 VND</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Tốt</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Đà Nẵng</span>
        <span className="fpPrice">Giá từ 1.500.000 VND</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Rất tốt</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Hồ Chí Minh</span>
        <span className="fpPrice">Giá từ 1.190.000 VND</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Tốt</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;