function Contact() {
  return (
    <>
      <div id="form" className="div_contact">
        <div className="div_section_contact">
          <h1>Contact</h1>
          <p>
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. je pourrais vous aider. Remplissez le formulaire et je vous
            répondrai dès que possible. dans les plus brefs délais.
          </p>
        </div>

        <div className="div_section_form">
          <form method="get" action="/action_page.php">
            <div class="formulaire">
              <label for="Name"></label>
              <input
                type="text"
                name="fname"
                id="Name"
                placeholder="NAME"
                size="30"
                maxlength="20"
                required
              />
            </div>

            <div class="formulaire">
              <label for="EmailAdd"></label>
              <input
                type="email"
                name="email"
                id="EmailAdd"
                placeholder="EMAIL"
                size="30"
                maxlength="50"
                required
              />
            </div>

            <textarea name="message" rows="15"></textarea>
          </form>

          <div className="div_section_button">
            <button>Envoyer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
