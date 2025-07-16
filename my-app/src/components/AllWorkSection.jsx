import { Link } from 'react-router-dom';
import Button from './Button';

const AllWorkSection = () => {
  return (
    <section className="section all-work-section" id="section5">
      <div className="all-work-container">
        <Link to="/work" className="all-work-link">
          <Button 
            text="All Work (6)"
            className="bg-white"
            textSize="[1.8rem]"
            spanHeight="[2.5rem]"
          />
        </Link>
      </div>
    </section>
  );
};

export default AllWorkSection;