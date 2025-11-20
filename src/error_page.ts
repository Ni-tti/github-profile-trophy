abstract class BaseError {
  readonly status!: number;
  readonly message!: string;
  constructor(readonly content?: string) {}
  render() {
    return this.renderPage();
  }

  private renderPage() {
    return `<!DOCTYPE html>
    <html lang="en"><head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GitHub Profile Trophy</title>
      <meta name="description" content="🏆 Add dynamically generated GitHub Stat Trophies on your readme">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        h1,
        h2 {
          color: #333;
        }
        p {
          color: #666;
        }
        #back-link {
          display: flex;
          justify-content: center;
          text-decoration: none;
        }
        #back-link:hover {
          text-decoration: underline;
        }
        section {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
        }
        div {
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 10px;
        }
        input {
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }
        button {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        #base-show {
          font-size: 16px;
          color: #333;
          background-color: #f4f4f4;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          margin: 10px 0;
        }
        button:hover {
          background-color: #444;
        }
        @media (max-width: 768px) {
          #base-show {
            font-size: 14px;
          }
        }
        @media (max-width: 480px) {
          #base-show {
            font-size: 8px;
          }
        }
        @media (min-width: 768px) {
          section {
            width: 60%;
          }
        }
        @media (min-width: 1024px) {
          section {
            width: 50%;
          }
        }
      </style>
    </head>
    <body>
      <h1 style="text-align: center;">${this.status} - ${this.message}</h1>
      <p style="text-align: center;">${this.content ?? ""}</p>
      ${this.content && '<a id="back-link" href="/">Go back</a>'}
    </body>
    </html>`;
  }
}

export class Error400 extends BaseError {
  override readonly status = 400;
  override readonly message = "Solicitud Incorrecta";

  constructor(content?: string) {
    super(
      content ||
        `
      <section>
        <div>
          <h2>"username" es un parámetro de consulta requerido</h2>
          <p>La URL debería verse como
          <div>
            <p id="base-show">${location.origin}?username=NOMBRE_USUARIO</p>
            <button>Copiar URL Base</button>
            <span id="temporary-span"></span>
          </div>donde
          <code>NOMBRE_USUARIO</code> es <em>tu nombre de usuario de GitHub.</em>
        </div>
        <div>
          <h2>Puedes usar este formulario: </h2>
          <p>Ingresa tu nombre de usuario y haz clic en obtener trofeos</p>
          <form action="${location.origin}/" method="get">
            <label for="username">Nombre de Usuario de GitHub</label>
            <input type="text" name="username" id="username" placeholder="Ej. Nicolhetti" required>
            <label for="theme">Tema (Opcional)</label>
            <input type="text" name="theme" id="theme" placeholder="Ej. onedark" value="flat">
            <text>
              Ver todos los temas disponibles
              <a href="https://github.com/Nicolhetti/github-profile-trophy#aplicar-tema" target="_blank">aquí</a>
            </text>
            <br>
            <button type="submit">Obtener Trofeos</button>
          </form>
        </div>
      </section>
    `,
    );
  }
}

export class Error419 extends BaseError {
  override readonly status = 419;
  override readonly message = "Límite de Velocidad Excedido";

  constructor(content?: string) {
    super(
      content ||
        "Has realizado demasiadas solicitudes. Por favor, espera unos minutos antes de intentar de nuevo.",
    );
  }
}

export class Error404 extends BaseError {
  override readonly status = 404;
  override readonly message = "No Encontrado";
}
