🎁 Amigo Secreto
Una aplicación web simple y divertida para organizar intercambios de regalos entre amigos, familiares o compañeros de trabajo.
📋 Descripción
Amigo Secreto es una herramienta que te permite:

Agregar nombres de participantes
Realizar un sorteo aleatorio
Asignar a cada persona su "amigo secreto"
Visualizar los resultados de manera clara
🚀 Características
✅ Interfaz intuitiva - Fácil de usar para cualquier persona
✅ Validación de datos - No permite nombres vacíos o duplicados
✅ Sorteo aleatorio - Algoritmo que garantiza asignaciones justas
✅ Responsive design - Funciona en dispositivos móviles y desktop
✅ Sin dependencias - Solo HTML, CSS y JavaScript vanilla
🛠️ Tecnologías utilizadas
HTML5 - Estructura semántica
CSS3 - Estilos y diseño responsive
JavaScript ES6 - Lógica de la aplicación
Google Fonts - Tipografías Inter y Merriweather
📁 Estructura del proyecto
amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica de JavaScript
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Este archivo
🚀 Instalación y uso
Opción 1: Descarga directa
Descarga o clona este repositorio
Abre el archivo index.html en tu navegador
¡Listo para usar!
Opción 2: Clonar repositorio
git clone https://github.com/tu-usuario/amigo-secreto.git
cd amigo-secreto
Opción 3: Servidor local (recomendado)
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Luego abre: http://localhost:8000
📖 Cómo usar la aplicación
Agregar participantes: Escribe el nombre de cada persona y haz clic en "Añadir"
Verificar la lista: Los nombres aparecerán en la lista debajo del campo de entrada
Realizar sorteo: Una vez que tengas al menos 2 participantes, haz clic en "Sortear amigo"
Ver resultados: Los emparejamientos aparecerán en la parte inferior
🎯 Funcionalidades
Validaciones implementadas:
❌ No permite nombres vacíos
❌ No permite nombres duplicados
❌ Requiere mínimo 2 participantes para sortear
Algoritmo de sorteo:
Mezcla aleatoria de participantes
Asignación circular (cada persona da regalo a la siguiente)
Garantiza que nadie se regale a sí mismo
🌐 Compatibilidad de navegadores
✅ Chrome 60+
✅ Firefox 55+
✅ Safari 12+
✅ Edge 79+
⚠️ Brave (requiere desactivar Shields para archivos locales)
🤝 Contribuir
¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

Fork el repositorio
Crea una rama para tu feature (git checkout -b feature/nueva-funcionalidad)
Commit tus cambios (git commit -m 'Agregar nueva funcionalidad')
Push a la rama (git push origin feature/nueva-funcionalidad)
Abre un Pull Request
📝 Ideas para futuras mejoras
 Guardar resultados en localStorage
 Exportar resultados a PDF
 Modo oscuro
 Animaciones más suaves
 Opción de eliminar participantes individuales
 Historial de sorteos anteriores
🐛 Problemas conocidos
En Brave browser, puede ser necesario desactivar los Shields para archivos locales
Los resultados se muestran solo en pantalla (no se guardan)
📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

👨‍💻 Autor
Tu Nombre: Juan Carlos Gutierrez Hernandez 

GitHub: @ Carlos-gh00
Email: gutierrezhernandezj299@gmail.com [blocked]
🙏 Agradecimientos
Proyecto desarrollado como parte del desafío de programación
Iconos proporcionados por el material de diseño
Fuentes de Google Fonts
