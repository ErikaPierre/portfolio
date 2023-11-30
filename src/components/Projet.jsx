function Projet(props) {
  return (
    <>
      <div className="div_card">
        <img className="projet_card_img" src={props.imageUrl} alt="" />
        <h2 className="projet_card_title">{props.name}</h2>
        <p className="projet_card_subtitle">
          {props.langages.map((l) => l + " ")}
        </p>
      </div>
    </>
  );
}

export default Projet;
