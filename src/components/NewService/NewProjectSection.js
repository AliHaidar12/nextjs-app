import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from './contentServiceNew.module.css';

const ProjectSection = ({ items = null }) => {
  return (
    <div>
      <div className={`container ${styles.mainBox} d-flex align-items-center justify-content-center`}>
        <div className="row gx-4">
          {items.map((item, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-3 d-flex flex-column align-items-center">
              <div className={`box text-center p-4 ${styles.box_container}`}>
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={80}
                  height={80}
                  className="img-fluid"
                  priority
                />
                <div className={`number-container `}>
                  <p className={styles.text_number}>{item.number}</p>
                </div>
                <p className={styles.text_style}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
