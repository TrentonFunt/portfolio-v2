import { Link } from 'react-router-dom';

const BrandSection = ({ id, brandName, image }) => {
  return (
    <section 
      className="section brand-section" 
      id={id}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="brand-overlay"></div>
      <div className="brand-content">
        <Link to={`/work/${id}`} className="brand-link">
          <div className="link-container">
            <div className="original-text">{brandName}</div>
            <div className="hover-text">{brandName}</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BrandSection;