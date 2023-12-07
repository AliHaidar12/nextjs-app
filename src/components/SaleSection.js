import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contentSection.module.css'; // Import the CSS file

const SaleSection = ({ text }) => {
  return (
    <div className={`mt-2 d-flex flex-column ${styles.sale} flex-md-row align-items-center justify-content-center text-white text-center py-2`}>
    <p className="mb-3 mb-md-0 me-md-3 fs-5 fw-bold">{text}</p>
    <p className="mb-0 fs-5 fw-bold">
        <i className="bi bi-telephone"></i> <span>+971581535184</span>
    </p>
</div>
    
  );
};

export default SaleSection;
