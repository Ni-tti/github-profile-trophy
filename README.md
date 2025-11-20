<div align="center">
  <img width="140" src="https://user-images.githubusercontent.com/6661165/91657958-61b4fd00-eb00-11ea-9def-dc7ef5367e34.png" alt="Trofeos de Perfil de GitHub"/>
  <h2 align="center">Trofeos de Perfil de GitHub</h2>
  <p align="center">🏆 Añade trofeos de estadísticas de GitHub generados dinámicamente en tu README</p>
</div>

<div align="center">

[![estrellas](https://img.shields.io/github/stars/Nicolhetti/github-profile-trophy)](https://github.com/Nicolhetti/github-profile-trophy/stargazers)
[![forks](https://img.shields.io/github/forks/Nicolhetti/github-profile-trophy)](https://github.com/Nicolhetti/github-profile-trophy/network/members)
[![issues](https://img.shields.io/github/issues/Nicolhetti/github-profile-trophy)](https://github.com/Nicolhetti/github-profile-trophy/issues)
[![licencia](https://img.shields.io/github/license/Nicolhetti/github-profile-trophy)](https://github.com/Nicolhetti/github-profile-trophy/blob/master/LICENSE)

</div>

<p align="center">
  Puedes usar este servicio de forma gratuita. Busco patrocinadores para ayudarnos a mantener este servicio ❤️
</p>

<!-- <div align="center">
  <a href="https://github.com/sponsors/Nicolhetti">
    <img src="https://img.shields.io/static/v1?label=Patrocinar&message=%E2%9D%A4&logo=GitHub&color=ff69b4" alt="Patrocinar"/>
  </a>
</div> -->

> ⚠️ **Aviso del Propietario del Proyecto**
>
> Hola a todos,\
> Soy el propietario de este proyecto.
>
> Actualmente, debido al aumento de usuarios y tráfico, el costo de mantener
> este servicio se ha vuelto bastante alto y está siendo financieramente difícil
> de sostener.\
> A medida que los costos continúan aumentando, existe la posibilidad de que el
> servicio tenga que ser descontinuado.\
> Ahora estamos en una etapa donde la monetización y el apoyo financiero son
> esenciales.
>
> Tu apoyo de las siguientes maneras sería muy apreciado:
>
> 1. Apoyo financiero:
>    [Patrocinadores de GitHub](https://github.com/sponsors/Nicolhetti) _No hay Stripe en Argentina por lo que no puedo habilitar Sponsors_
> 2. Reducir la carga del servidor mediante auto-hospedaje (haciendo fork en
>    GitHub e implementando en Vercel)

# Inicio Rápido

Añade el siguiente código a tu readme. Al pegar el código en el readme de tu
perfil, cambia el valor de `?username=` por tu nombre de usuario de GitHub.

```markdown
[![trofeo](https://trophy.nicolhetti.com.ar/?username=Nicolhetti)](https://github.com/Nicolhetti/github-profile-trophy)
```

<p align="center">
  <img src="https://trophy.nicolhetti.com.ar/?username=Nicolhetti&column=8&rank=SSS,SS,S,AAA,AA,A,B,C" />
</p>

## Usar tema

Añade un parámetro opcional del tema.

```markdown
[![trofeo](https://trophy.nicolhetti.com.ar/?username=Nicolhetti&theme=onedark)](https://github.com/Nicolhetti/github-profile-trophy)
```

<p align="center">
  <img width="660" src="https://user-images.githubusercontent.com/6661165/92327052-d99b9e00-f091-11ea-9a24-c7ec86982370.png">
</p>

**[Más detalles sobre temas](#aplicar-tema)**

# Acerca de los Rangos

Los rangos son `SSS`, `SS`, `S`, `AAA`, `AA`, `A`, `B`, `C`, `DESCONOCIDO`,
`SECRETO`.

| Rango       | Descripción                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| SSS, SS, S  | Estás en un rango difícil de alcanzar. Puedes presumir.                                    |
| AAA, AA, A  | Alcanzarás este rango si haces tu mejor esfuerzo. Apuntemos aquí primero.                  |
| B, C        | Actualmente estás haciendo un buen progreso. Apuntemos un poco más alto.                   |
| DESCONOCIDO | Aún no has tomado acción. Actuemos primero.                                                |
| SECRETO     | Este rango es muy raro. El trofeo no se mostrará hasta que se cumplan ciertas condiciones. |

**NOTA: El rango `DESCONOCIDO` se denota por `?`**

## Rango Secreto

La condición de adquisición es secreta, pero puedes ver esto.

<p align="center">
  <img width="110" src="https://github.com/user-attachments/assets/40461f38-a317-431c-93d2-a56c2e803cf3" />
</p>

Solo hay unos pocos trofeos secretos. Por lo tanto, si se te ocurren condiciones
interesantes, consideraré agregar un trofeo. Estoy esperando contribuciones.

# Acerca de los Detalles de Visualización

<p align="center">
  <img width="220" src="https://user-images.githubusercontent.com/6661165/91642962-6333e600-ea6a-11ea-83af-e371e996bfa6.png" />
</p>

1. Nombre del título del objetivo de agregación.
2. Rango actual.
3. Título según el rango.
4. Resultado de la agregación objetivo.
5. Barra de progreso del rango.

# Parámetros de Solicitud Opcionales

- [title](#filtrar-por-títulos)
- [rank](#filtrar-por-rangos)
- [column](#especificar-el-tamaño-máximo-de-fila-y-columna)
- [row](#especificar-el-tamaño-máximo-de-fila-y-columna)
- [theme](#aplicar-tema)
- [margin-w](#ancho-de-margen)
- [margin-h](#alto-de-margen)
- [no-bg](#fondo-transparente)
- [no-frame](#ocultar-marcos)

## Filtrar por títulos

Puedes filtrar la visualización especificando los títulos de los trofeos.

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&title=Followers
```

<p align="center">
  <img width="110" src="https://user-images.githubusercontent.com/6661165/92317141-80ebe700-f038-11ea-8501-4015bfbb2cf4.png">
</p>

Si deseas especificar múltiples títulos.

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&title=Stars,Followers
```

<p align="center">
  <img width="220" src="https://github.com/user-attachments/assets/3b8a1c8b-afcd-49dc-ab18-a439d5c36a83">
</p>

También puedes excluir los trofeos que no deseas mostrar.

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&title=-Stars,-Followers
```

## Filtrar por rangos

Puedes filtrar la visualización especificando los rangos.\
`Valores disponibles: SECRET SSS SS S AAA AA A B C`

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&rank=S
```

<p align="center">
  <img width="110" src="https://user-images.githubusercontent.com/6661165/91642657-1cdd8780-ea68-11ea-994b-4568a55cd22a.png" />
</p>

Si deseas especificar múltiples rangos.

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&rank=S,AAA
```

<p align="center">
  <img width="220" src="https://github.com/user-attachments/assets/0c2ffca8-4b03-4d46-b1d7-4e1eb6702f68">
</p>

También puedes excluir rangos.

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&rank=-C,-B
```

**NOTA: Dado que `DESCONOCIDO` se denota por `?`, para incluirlo o excluirlo
tendrás que usar `rank=?` y `rank=-?` respectivamente**

## Especificar el tamaño máximo de fila y columna

Puedes especificar el tamaño máximo de fila y columna.\
El trofeo se ocultará si excede el rango de fila y columna.

`Valor disponible: tipo numérico`\
`Por defecto: column=6 row=3`

Restringir solo fila

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&row=2
```

Restringir solo columna

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&column=2
```

Restringir fila y columna

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&row=2&column=3
```

<p align="center">
  <img width="330" src="https://user-images.githubusercontent.com/6661165/91659474-c07f7400-eb0a-11ea-84f2-eb6b42547829.png">
</p>

Columna adaptativa

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&column=-1
```

Puedes establecer `column` en `-1` para adaptar el ancho al número de trofeos,
el parámetro `row` será ignorado.

## Aplicar tema

Temas disponibles.

| tema                        |
| --------------------------- |
| [flat](#flat)               |
| [onedark](#onedark)         |
| [gruvbox](#gruvbox)         |
| [dracula](#dracula)         |
| [monokai](#monokai)         |
| [chalk](#chalk)             |
| [nord](#nord)               |
| [alduin](#alduin)           |
| [darkhub](#darkhub)         |
| [juicyfresh](#juicyfresh)   |
| [buddhism](#buddhism)       |
| [oldie](#oldie)             |
| [radical](#radical)         |
| [onestar](#onestar)         |
| [discord](#discord)         |
| [algolia](#algolia)         |
| [gitdimmed](#gitdimmed)     |
| [tokyonight](#tokyonight)   |
| [matrix](#matrix)           |
| [apprentice](#apprentice)   |
| [dark_dimmed](#dark_dimmed) |
| [dark_lover](#dark_lover)   |
| [kimbie_dark](#kimbie_dark) |
| [aura](#aura)               |

### flat

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&theme=flat
```

<p align="center">
  <img width="660" src="https://user-images.githubusercontent.com/6661165/92325601-039b9300-f087-11ea-983a-fce8133549ee.png">
</p>

### onedark

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&theme=onedark
```

<p align="center">
  <img width="660" src="https://user-images.githubusercontent.com/6661165/92327052-d99b9e00-f091-11ea-9a24-c7ec86982370.png">
</p>

## Ancho de margen

Puedes poner un margen en el ancho entre trofeos.\
`Valor disponible: tipo numérico`\
`Por defecto: margin-w=0`

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&margin-w=15
```

<p align="center">
  <img width="735" src="https://user-images.githubusercontent.com/6661165/93668661-e0ca9f00-fac8-11ea-9bec-325454f49fb4.png">
</p>

## Alto de margen

Puedes poner un margen en el alto entre trofeos.\
`Valor disponible: tipo numérico`\
`Por defecto: margin-h=0`

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&margin-h=15
```

<p align="center">
  <img width="110" height="330" src="https://github.com/user-attachments/assets/233dee5b-4491-46cc-884a-39d0aa928752">
</p>

## Ejemplo de diseño

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&column=3&margin-w=15&margin-h=15
```

<p align="center">
  <img width="360" src="https://user-images.githubusercontent.com/6661165/93668677-ff309a80-fac8-11ea-8ae3-3e3e8adbef39.png">
</p>

## Fondo transparente

Puedes hacer el fondo transparente.\
`Valor disponible: tipo booleano (true o false)`\
`Por defecto: no-bg=false`

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&no-bg=true
```

<p align="center">
  <img width="969" src="https://github.com/user-attachments/assets/32d3b63b-7845-42cb-b71c-31abaa673bcb">
</p>

## Ocultar marcos

Puedes ocultar los marcos alrededor de los trofeos.\
`Valor disponible: tipo booleano (true o false)`\
`Por defecto: no-frame=false`

```
https://trophy.nicolhetti.com.ar/?username=Nicolhetti&no-frame=true
```

<p align="center">
  <img width="936" src="https://github.com/user-attachments/assets/54de15a3-d907-4a50-8117-170aae74d1cd">
</p>

# Guía de Contribución

Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

# Licencia

Este producto está licenciado bajo la
[Licencia MIT](https://github.com/Nicolhetti/github-profile-trophy/blob/master/LICENSE).

# 🙏 Patrocinadores

¡Muchas gracias a todos los increíbles patrocinadores que apoyan este proyecto!
Tus contribuciones ayudan a mantener el desarrollo en marcha y hacen posible
este trabajo.

## 💖 Patrocinadores Mensuales

- Tu nombre podría estar aquí - ¡Conviértete en patrocinador!

## 🎁 Patrocinadores Únicos

- Tu nombre podría estar aquí - ¡Haz una donación única!

---

<div align="center">
  <p>Desarrollado por ryo-ma</p>
  <p>Editado con ❤️ por Nicolhetti</p>
  <p>
    <a href="https://github.com/Nicolhetti/github-profile-trophy">⭐ Dale una estrella en GitHub</a>
  </p>
</div>
