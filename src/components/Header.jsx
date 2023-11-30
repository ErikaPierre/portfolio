function Header() {
  return (
    <>
      <div className="header">
        <div className="header_line">
          <h2>François TRUCHON</h2>
          <div className="header_logos">
            <img src="logos/Header → List → Item → Link → Img.svg" alt="" />
            <img src="logos/Header → List → Item → Link → SVG-1.svg" alt="" />
            <img src="logos/Header → List → Item → Link → SVG-2.svg" alt="" />
            <img src="logos/Header → List → Item → Link → SVG.svg" alt="" />
          </div>
        </div>

        <div className="header_general">
          <div className="header_general_Text_1">
            <h1>Enchanté de vous rencontrer</h1>
            <h1>
              Je suis <u>Francois Truchon</u>
            </h1>
          </div>
          <div className="header_general_Text_2">
            <p>Basé à Paris je suis un développeur Fullstack</p>
            <p>passionné par les applications web & l’accesibilité</p>
          </div>

          <div className="header_general_button">
            <button>Contactez-moi</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
