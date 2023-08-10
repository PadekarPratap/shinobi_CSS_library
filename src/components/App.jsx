import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={` container`}>
      <h2 className={styles.title}>Colors</h2>
      <div className={styles.box}>
        <span className="text-primary">text-primary</span>
        <span className="text-secondary">text-secondary</span>
        <span className="text-error">text-error</span>
        <span className="text-info">text-info</span>
        <span className="text-green">text-green</span>
        <span className="text-purple">text-purple</span>
        <span className="text-yellow">text-yellow</span>
        <span className="text-orange">text-orange</span>
        <span className="text-gray">text-gray</span>
        <span className="text-black">text-black</span>
        <span className="text-white">text-white</span>
      </div>

      <h2 className={styles.title}>Backgorund Colors</h2>
      <div className={styles.box}>
        <span className="bg-primary">bg-primary</span>
        <span className="bg-secondary">bg-secondary</span>
        <span className="bg-error">bg-error</span>
        <span className="bg-info">bg-info</span>
        <span className="bg-green">bg-green</span>
        <span className="bg-purple">bg-purple</span>
        <span className="bg-yellow">bg-yellow</span>
        <span className="bg-orange">bg-orange</span>
        <span className="bg-gray">bg-gray</span>
        <span className="bg-black text-white">bg-black</span>
        <span className="bg-white text-black">bg-white</span>
      </div>

      {/* font sizes  */}
      <h2 className={styles.title}>Fonts</h2>
      <div>
        <p className="font-xxl">Heading</p>
        <p className="font-xl">Heading</p>
        <p className="font-lg">Heading</p>
        <p className="font-base">Heading</p>
        <p className="font-sm">Heading</p>
      </div>

      {/* card  */}
      <div className={`${styles.cardContainer} card`}>
        <div className="card-title">Card Title</div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          nobis fugit quo alias praesentium delectus doloremque odio quis
          accusamus laudantium? Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </div>
      </div>

      <h2 className={styles.title}>Buttons</h2>
      <div className={styles.box}>
        <a href="#" className="btn-lg">
          Default Button
        </a>
        <a href="#" className="btn">
          Default Button
        </a>
        <a href="#" className="btn-sm">
          Default Button
        </a>
      </div>

      <h2 className={styles.title}>Button Colors</h2>
      <div className={styles.box}>
        <a href="#" className="btn btn-primary text-white">
          primary
        </a>
        <a href="#" className="btn btn-secondary text-black">
          secondary
        </a>
        <a href="#" className="btn btn-error text-white">
          error
        </a>
        <a href="#" className="btn btn-info text-black">
          info
        </a>
        <a href="#" className="btn btn-outline-primary text-black">
          primary
        </a>
        <a href="#" className="btn btn-outline-secondary text-black">
          secondary
        </a>
        <a href="#" className="btn btn-outline-error text-black">
          error
        </a>
        <a href="#" className={`btn btn-outline-info text-black ${styles.tem}`}>
          info
        </a>
      </div>

      <h2 className={styles.title}>Grid System</h2>
      <div className={` ${styles.footer} row gap-1 justify-center`}>
        <div className={`col-xs-12 col-lg-3`}>
          <div className=" bg-primary text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus animi tempora eligendi atque id molestiae provident
            illo ipsam qui recusandae eos, commodi, pariatur unde. Blanditiis in
            totam tenetur reiciendis rem officiis, molestiae aliquid quo id,
            error alias cumque? Pariatur, fuga soluta. Consequuntur, natus
            tempore quaerat quibusdam autem aliquid animi dolorum?
          </div>
        </div>
        <div className="col-xs-12 col-lg-3 ">
          <div className="bg-secondary text-purple-dark-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus animi tempora eligendi atque id molestiae provident
            illo ipsam qui recusandae eos, commodi, pariatur unde. Blanditiis in
            totam tenetur reiciendis rem officiis, molestiae aliquid quo id,
            error alias cumque? Pariatur, fuga soluta. Consequuntur, natus
            tempore quaerat quibusdam autem aliquid animi dolorum?
          </div>
        </div>
        <div className="col-xs-12 col-lg-3  ">
          <div className="bg-primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus animi tempora eligendi atque id molestiae provident
            illo ipsam qui recusandae eos, commodi, pariatur unde. Blanditiis in
            totam tenetur reiciendis rem officiis, molestiae aliquid quo id,
            error alias cumque? Pariatur, fuga soluta. Consequuntur, natus
            tempore quaerat quibusdam autem aliquid animi dolorum?
          </div>
        </div>
        <div className="col-xs-12 col-lg-3 ">
          <div className="bg-error">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus animi tempora eligendi atque id molestiae provident
            illo ipsam qui recusandae eos, commodi, pariatur unde. Blanditiis in
            totam tenetur reiciendis rem officiis, molestiae aliquid quo id,
            error alias cumque? Pariatur, fuga soluta. Consequuntur, natus
            tempore quaerat quibusdam autem aliquid animi dolorum?
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
