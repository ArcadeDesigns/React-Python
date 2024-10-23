export default function AboutSection() {
  return (
    <div
      className="Ctn Screen HeaderContent RowFlex"
      style={{ backgroundColor: "#000010" }}
    >
      <div className="Ctn ColumnFlex">
        <div className="ColumnFlex AboutText">
          <span>About us</span>
          <h3>
            At Quinn Daisies, we believe in innovation, collaboration, and
            growth
          </h3>
        </div>
        <a className="Btn" href="/about">
          Know Who We Are
        </a>
      </div>

      <div className="Ctn ColumnFlex">
        <div className="ListAnimation Radius-10">
          <img
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729278203/Quinn%20Daisies%20Tech/Diamond_ug5x9r.png"
            alt="Quinn Daisies Images"
          />

          <div className="ListAnimationContent">
            <h2>Our Focus</h2>
            <p>
              With a primary focus on Software Development, we provide a range
              of services tailored to meet the needs of modern enterprises.
            </p>
          </div>
        </div>

        <div className="ListAnimation Radius-10">
          <img
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729278215/Quinn%20Daisies%20Tech/3ds_Max_gjk2wb.png"
            alt="Quinn Daisies Images"
          />

          <div className="ListAnimationContent">
            <h2>Our Vision</h2>
            <p>
              To become a global leader in software development and digital
              services, enabling businesses to unlock their full potential in a
              digitally-driven world.
            </p>
          </div>
        </div>

        <div className="ListAnimation Radius-10">
          <img
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729278227/Quinn%20Daisies%20Tech/Particle_x7eoca.png"
            alt="Quinn Daisies Images"
          />

          <div className="ListAnimationContent">
            <h2>Our Focus</h2>
            <p>
              With a primary focus on Software Development, we provide a range
              of services tailored to meet the needs of modern enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
