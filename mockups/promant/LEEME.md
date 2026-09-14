# Promant · maqueta de web

**Cliente potencial:** Soluciones Integrales Promant SLU — piscinas y jardines, Alcalá de Henares
**Estado:** maqueta terminada, sin enviar

La maqueta es únicamente del cliente: no aparece nada de Hugo dentro. La parte comercial
—precios, vías A y B, siguiente paso— va en el correo o en el dossier, no en la página.

## Archivos

- `index.html` — archivo único autocontenido, fotos incluidas. Se arrastra tal cual a
  Netlify Drop o Vercel y ya hay URL.
- `og.jpg` — imagen de previsualización para cuando se comparta el enlace.

## Datos reales usados

| Dato | Valor | Fuente |
|---|---|---|
| Valoración | 5,0 · 52 reseñas, ninguna por debajo de 5 | Ficha de Google |
| Teléfonos | 641 03 80 50 · 641 41 90 99 | Google y cartel de Instagram |
| WhatsApp | 660 885 146 | Cartel de Instagram |
| Correo | info.promant@gmail.com | Cartel de Instagram |
| Dirección | C/ Santa Bárbara, 3 · 28806 Alcalá de Henares | Ficha de Google |
| Horario | Hasta las 20:00 | Ficha de Google |
| Antes / después | Post de Urb. Zulema, imágenes 1 y 3 | Instagram |
| Ficha de skimmer | Texto y foto del post de Urb. Medina Azahara | Instagram |
| Logo | Gota verde esmeralda | Su ficha de Google |
| Foto de jardinería | Ciprés en espiral y plantación ornamental | Su ficha de Google |

## Qué falta confirmar con él

1. **Textos de las reseñas.** Los tres bloques dicen `[ Texto de la reseña ]`. Se copian de
   su ficha de Google. Es el contenido que más convence.
2. **Más fotos de jardinería.** La de la sección verde —el ciprés recortado en espiral sobre
   la valla gris, de su ficha de Google— es buena y enseña oficio. Hace falta alguna más:
   es la parte del negocio con más margen y la que peor documentada está.
3. **Municipios exactos** a los que van, más allá de Alcalá.
4. **Modalidades de mantenimiento**: las etiquetas de la hoja de servicios describen tareas,
   no planes cerrados. Si él quiere vender planes (quincenal, semanal, solo temporada), hay
   que ponerlos con precio.
5. **Detalles técnicos** de la sección de construcción: comprobar que hacen todo lo listado.

## Argumentario para el correo

- Es el mejor valorado de Alcalá (5,0 · 52) y **el único sin web**. Piscinas CI tiene 4,7
  con 134 reseñas y web con anuncios de pago; Piscimant 4,7 con 48 y web.
- No vender «más clientes» —está saturado— sino **mejores clientes**: comunidades de
  propietarios, hoteles y campings, que piden tres presupuestos y descartan al que no tiene
  web. Y **menos tiempo perdido**: el formulario filtra las llamadas.
- Ventana de otoño: invernaje y cierre de temporada, que es lo que se vende ahora.
- Su logo real es la gota verde, no la tarjeta negra y dorada generada con IA. La maqueta
  usa su identidad de verdad; se lo puedes decir tal cual.

## Avisos

- Lleva `noindex` y un aviso arriba y en el pie de que **no es la web oficial**. No quitar
  ninguna de las dos cosas.
- Desplegar en un dominio propio, nunca en uno que suene a suyo.
- Cambiar `og:image` por la URL absoluta una vez desplegado o WhatsApp no mostrará la tarjeta.
- Las fotos son suyas. Si no cierra, se retira el enlace.

---

## Cómo está construido (v4)

Todo es HTML, CSS y 30 líneas de JavaScript sin librerías. Un solo archivo, sin build.
Portable tal cual a Vercel; en WordPress cada bloque es replicable con Elementor/Bricks o
como bloque propio.

| Elemento | Técnica | En WordPress |
|---|---|---|
| Hero a pantalla con parallax | `animation-timeline: scroll(root)` en CSS | Sección con imagen de fondo + efecto parallax nativo del constructor |
| Aparición al hacer scroll | `animation-timeline: view()` en CSS, sin JS | Efecto de entrada del constructor |
| Nav transparente que se vuelve sólida | 8 líneas de JS con `scroll` pasivo | Header «sticky transparente» — lo traen casi todos los temas |
| Tarjeta de datos montada sobre el hero | `margin-top` negativo | Margen negativo en la sección |
| Ondas entre secciones | SVG inline con `preserveAspectRatio="none"` | Separador de forma («shape divider») |
| Comparador antes/después | Dos `<img>` superpuestas + `opacity` + 15 líneas de JS | Plugin de before/after o un bloque a medida |
| Marquesina de zonas | `@keyframes` + `translateX(-50%)` | Widget de marquesina |
| Columna de servicios fija | `position: sticky` | Columna sticky del constructor |

Sin dependencias externas más allá de Google Fonts (Archivo). Las fotos van embebidas como
data URI, así que el archivo se abre igual desde el escritorio que desde un servidor.
Respeta `prefers-reduced-motion` y los efectos de scroll degradan a contenido visible en
navegadores que no los soporten.

## Ojo con esto antes de enviar

La marquesina de zonas incluye **Torrejón de Ardoz, Meco y Villalbilla**, que son
suposiciones razonables por cercanía pero **no están confirmadas**. Confírmalas con él o
quítalas.

## Comprobado en móvil

Medido a 320, 360, 390, 414, 430 y 768 px de ancho:

- Sin desplazamiento horizontal en ningún ancho.
- Ningún objetivo táctil por debajo de 44 px salvo los enlaces del pie.
- Sin errores de JavaScript.
- Por debajo de 360 px se oculta el botón del menú para que quepa el logotipo; abajo siguen
  los botones fijos de Llamar y WhatsApp.
- El hero, el comparador, la marquesina y las columnas pasan a una sola columna.
- Los efectos de scroll degradan a contenido visible donde no hay soporte, y se desactivan
  con `prefers-reduced-motion`.

Peso total de la página: unos 520 KB con las cinco fotos embebidas.
