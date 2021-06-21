// import illustrationImg from '../assets/img/illustration.svg';
// import logoImg from '../assets/img/logo.svg';
// import googleIconImg from '../assets/img/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        {/* <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" /> */}
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          {/* <img src={logoImg} alt="Letmeask" /> */}
          <button>
            {/* <img src={googleIconImg} alt="Logo do Google" /> */}
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}