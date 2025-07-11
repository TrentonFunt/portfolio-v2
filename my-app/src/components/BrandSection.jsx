const BrandSection = ({ id, brandName }) => {
  return (
    <section className="section brand-section" id={id}>
      <div className="brand-content">
        <h2 className="brand-title">{brandName}</h2>
      </div>
    </section>
  );
};

export default BrandSection;