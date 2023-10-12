import "./Home.css";

function Home() {
  return (
    <>
      <div className="landing-page">
        <header className="header">
          <h1>Willkommen</h1>
          <p>Entdecken!</p>
        </header>
        <section className="features">
          <div className="feature">
            <i className="fas fa-globe"></i>
            <h2>Weltweit</h2>
            <p>Verbinden Sie sich mit Menschen auf der ganzen Welt.</p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h2>Freunde</h2>
            <p>Finden Sie neue Freunde.</p>
          </div>
        </section>
        <footer className="footer">
          <p>&copy; </p>
        </footer>
      </div>
    </>
  );
}
export default Home;
