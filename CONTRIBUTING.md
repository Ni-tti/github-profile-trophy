# Guía de Contribución

¡Gracias por tu interés en contribuir a GitHub Profile Trophy! Este documento te
guiará a través del proceso de configuración y contribución al proyecto.

## Entorno

- Deno >= v1.43.6
- [Vercel](https://vercel.com/)
- API de GitHub v4
- Docker y Docker Compose (opcional)

## Ejecución Local

### Paso 1: Configurar Variables de Entorno

Crea un archivo `.env` en el directorio raíz del proyecto y escribe tu token de
GitHub en el archivo `.env`. Por favor, selecciona el permiso `repo` al crear el
token.

```properties
GITHUB_TOKEN1=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GITHUB_TOKEN2=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Si usas GitHub Enterprise:
# (esta variable de entorno por defecto es https://api.github.com/graphql)
GITHUB_API=https://github.example.com/api/graphql

# Para habilitar Redis (opcional):
ENABLE_REDIS=false
REDIS_PORT=6379
REDIS_HOST=localhost
REDIS_USERNAME=
REDIS_PASSWORD=
```

### Paso 2: Obtener un Token de GitHub

1. Ve a
   [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Haz clic en "Generate new token (classic)"
3. Proporciona una descripción (ej: "GitHub Profile Trophy Dev")
4. Selecciona los siguientes permisos:
   - `repo` (acceso completo a repositorios privados)
   - `read:user` (leer todos los datos del perfil de usuario)
5. Haz clic en "Generate token"
6. Copia el token y pégalo en tu archivo `.env`

### Paso 3: Ejecutar el Servidor Local

```sh
deno task start
```

El servidor estará disponible en `http://localhost:8080`

### Ejemplo de URL de Prueba

```
http://localhost:8080/?username=Nicolhetti
```

### Paso 4: Habilitar Redis (Opcional)

Si deseas usar Redis para el almacenamiento en caché:

```sh
docker compose up -d
```

Luego actualiza tu archivo `.env`:

```properties
ENABLE_REDIS=true
```

## Configuración del Editor

Lee la configuración en [.editorconfig](./.editorconfig) para mantener la
consistencia en el estilo de código.

### Configuración Recomendada para VS Code

```json
{
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "denoland.vscode-deno"
}
```

## Pull Requests

¡Los pull requests son siempre bienvenidos! En general, deben abordar una sola
preocupación en el menor número de líneas cambiadas posible.

### Directrices para Pull Requests

1. **Un problema a la vez**: Cada PR debe abordar un solo problema o
   característica
2. **Cambios mínimos**: Mantén los cambios lo más pequeños y enfocados posible
3. **Descripción clara**: Explica qué cambia tu PR y por qué
4. **Pruebas**: Asegúrate de que todas las pruebas pasen
5. **Formato**: Ejecuta `deno task format` antes de hacer commit

### Proceso de Pull Request

1. Fork el repositorio
2. Crea una rama para tu característica
   (`git checkout -b feature/caracteristica-increible`)
3. Haz commit de tus cambios (`git commit -m 'Agrega característica increíble'`)
4. Push a la rama (`git push origin feature/caracteristica-increible`)
5. Abre un Pull Request

Para cambios que abordan funcionalidad principal, es mejor abrir un issue
primero para discutir tu propuesta. ¡Espero ver lo que se te ocurre!

## Antes de Contribuir

### 1. Ejecutar Deno Lint

Verifica que tu código cumpla con los estándares de linting:

```sh
deno task lint
```

### 2. Ejecutar Deno Format

Formatea tu código para mantener la consistencia:

```sh
deno task format
```

### 3. Ejecutar Deno Test

Asegúrate de que todas las pruebas pasen:

```sh
deno task test
```

## Estructura del Proyecto

```
github-profile-trophy/
├── api/                    # Endpoints de la API
│   └── index.ts           # Punto de entrada principal
├── src/                   # Código fuente
│   ├── card.ts           # Generación de tarjetas SVG
│   ├── trophy.ts         # Definiciones de trofeos
│   ├── trophy_list.ts    # Gestión de lista de trofeos
│   ├── user_info.ts      # Información del usuario
│   ├── theme.ts          # Definiciones de temas
│   ├── icons.ts          # Iconos SVG
│   ├── utils.ts          # Funciones de utilidad
│   ├── config/           # Configuración
│   ├── Helpers/          # Funciones auxiliares
│   ├── Repository/       # Capa de repositorio
│   ├── Services/         # Servicios
│   └── Types/            # Definiciones de tipos
├── test/                  # Pruebas
└── vercel.json           # Configuración de Vercel
```

## Agregar un Nuevo Tema

Para agregar un nuevo tema, edita `src/theme.ts`:

```typescript
export const COLORS: { [name: string]: Theme } = {
  // ... temas existentes
  mi_tema: {
    BACKGROUND: "#FFFFFF",
    TITLE: "#000000",
    ICON_CIRCLE: "#CCCCCC",
    TEXT: "#666666",
    LAUREL: "#00FF00",
    SECRET_RANK_1: "#FF0000",
    SECRET_RANK_2: "#00FF00",
    SECRET_RANK_3: "#0000FF",
    SECRET_RANK_TEXT: "#FFFFFF",
    NEXT_RANK_BAR: "#0366d6",
    S_RANK_BASE: "#FAD200",
    S_RANK_SHADOW: "#C8A090",
    S_RANK_TEXT: "#886000",
    A_RANK_BASE: "#B0B0B0",
    A_RANK_SHADOW: "#9090C0",
    A_RANK_TEXT: "#505050",
    B_RANK_BASE: "#A18D66",
    B_RANK_SHADOW: "#816D96",
    B_RANK_TEXT: "#412D06",
    DEFAULT_RANK_BASE: "#777",
    DEFAULT_RANK_SHADOW: "#333",
    DEFAULT_RANK_TEXT: "#333",
  },
};
```

## Agregar un Nuevo Trofeo

Para agregar un nuevo trofeo, edita `src/trophy.ts`:

```typescript
export class MiNuevoTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(RANK.SSS, "Mensaje SSS", 1000),
      new RankCondition(RANK.SS, "Mensaje SS", 500),
      new RankCondition(RANK.S, "Mensaje S", 200),
      new RankCondition(RANK.AAA, "Mensaje AAA", 100),
      new RankCondition(RANK.AA, "Mensaje AA", 50),
      new RankCondition(RANK.A, "Mensaje A", 20),
      new RankCondition(RANK.B, "Mensaje B", 10),
      new RankCondition(RANK.C, "Mensaje C", 1),
    ];
    super(score, rankConditions);
    this.title = "MiNuevoTrofeo";
    this.filterTitles = ["MiTrofeo", "MiNuevoTrofeo"];
  }
}
```

Luego, agrega el trofeo a `src/trophy_list.ts`:

```typescript
export class TrophyList {
  constructor(userInfo: UserInfo) {
    this.trophies.push(
      // ... trofeos existentes
      new MiNuevoTrophy(userInfo.miNuevaMetrica),
    );
  }
}
```

## Agregar Trofeo Secreto

Los trofeos secretos son especiales y solo se muestran cuando se cumplen ciertas
condiciones:

```typescript
export class MiTrofeoSecreto extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(RANK.SECRET, "Mensaje Secreto", 1),
    ];
    super(score, rankConditions);
    this.title = "TrofeoSecreto";
    this.filterTitles = ["TrofeoSecreto"];
    this.bottomMessage = "Mensaje personalizado";
    this.hidden = true; // ¡Importante!
  }
}
```

## Guía de Estilo de Código

### TypeScript/Deno

- Usa `const` para valores inmutables
- Usa `let` solo cuando necesites reasignar
- Evita `var`
- Usa tipos explícitos cuando mejore la legibilidad
- Prefiere interfaces sobre tipos cuando sea posible
- Usa nombres descriptivos de variables

### Ejemplo

```typescript
// ✅ Bueno
const userName: string = "Nicolhetti";
const userScore: number = 100;

// ❌ Malo
var u = "Nicolhetti";
let s = 100;
```

## Debugging

Para ejecutar el proyecto en modo debug:

```sh
deno task debug
```

Esto iniciará el servidor con el inspector de Chrome DevTools habilitado.

## Solución de Problemas Comunes

### Error: "Token de GitHub inválido"

- Verifica que tu token esté configurado correctamente en `.env`
- Asegúrate de que el token tenga los permisos correctos
- Intenta generar un nuevo token

### Error: "No se puede conectar a Redis"

- Verifica que Docker esté ejecutándose
- Asegúrate de que el contenedor Redis esté activo: `docker ps`
- Verifica la configuración de Redis en `.env`

### Error: "Deno no encontrado"

- Instala Deno: `curl -fsSL https://deno.land/x/install/install.sh | sh`
- Asegúrate de que Deno esté en tu PATH

## Obtener Ayuda

Si necesitas ayuda:

1. Revisa los
   [issues existentes](https://github.com/Nicolhetti/github-profile-trophy/issues)
2. Busca en la
   [documentación](https://github.com/Nicolhetti/github-profile-trophy/blob/master/README.md)
3. Abre un nuevo issue con una descripción detallada de tu problema

## Código de Conducta

Este proyecto sigue el
[Código de Conducta del Contributor Covenant](https://www.contributor-covenant.org/).

Por favor, sé respetuoso y constructivo en todas las interacciones.

## Licencia

Al contribuir a este proyecto, aceptas que tus contribuciones serán licenciadas
bajo la [Licencia MIT](LICENSE).

---

¡Gracias por contribuir a GitHub Profile Trophy! 🏆
