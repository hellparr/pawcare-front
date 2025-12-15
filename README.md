# 🐾 PawCare - Sistema de Gestión Veterinaria

Sistema profesional de gestión veterinaria desarrollado con React, TypeScript, TailwindCSS y Vite.

## 📋 Características

### Para Dueños de Mascotas
- ✅ Perfil de usuario con información personal
- ✅ Registro y gestión de mascotas
- ✅ Visualización de mascotas con cálculo automático de edad
- ✅ Información del veterinario asignado
- ✅ Diseño responsive (2-3 cards por pantalla, ajustable)

### Para Veterinarios
- ✅ Panel de control con información profesional
- ✅ Visualización de mascotas a cargo
- ✅ Registro de citas médicas completo
- ✅ Formulario de control con:
  - Fecha y motivo de consulta
  - Historia clínica
  - Procedimientos realizados
  - Receta médica (medicamentos, dosificación, frecuencia, duración)
  - Observaciones y recomendaciones
  - Información de contacto del dueño

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🔐 Usuarios de Prueba

### Dueños de Mascotas
- **Email:** juan.perez@email.com (2 mascotas)
- **Email:** maria.gomez@email.com (2 mascotas)
- **Email:** carlos.silva@email.com (1 mascota)
- **Contraseña:** cualquiera

### Veterinarios
- **Email:** maria.martinez@pawcare.com (Medicina General)
- **Email:** carlos.rodriguez@pawcare.com (Cirugía)
- **Email:** ana.lopez@pawcare.com (Dermatología)
- **Contraseña:** cualquiera

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes UI base
│   ├── Layout.tsx      # Layout principal
│   └── PetCard.tsx     # Tarjeta de mascota
├── context/            # Context API (Autenticación)
├── data/               # Datos mock
├── pages/              # Páginas de la aplicación
│   ├── owner/          # Páginas de dueños
│   └── veterinarian/   # Páginas de veterinarios
├── types/              # Tipos TypeScript
├── utils/              # Utilidades (cálculo de edad, fechas)
├── App.tsx             # Componente principal y rutas
└── main.tsx            # Punto de entrada
```

## 🎨 Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **React Router** - Navegación
- **TailwindCSS** - Estilos
- **Lucide React** - Iconos
- **date-fns** - Manejo de fechas

## 📱 Rutas

### Públicas
- `/login` - Selección de tipo de usuario
- `/login/owner` - Login para dueños
- `/login/veterinarian` - Login para veterinarios

### Dueños (Protegidas)
- `/owner/profile` - Perfil y mascotas
- `/owner/register-pet` - Registrar mascota

### Veterinarios (Protegidas)
- `/veterinarian/dashboard` - Panel principal
- `/veterinarian/appointment/:petId` - Formulario de cita médica

## 🎯 Características Técnicas

- **Autenticación:** Context API con persistencia en localStorage
- **Rutas protegidas:** Por rol de usuario
- **Responsive:** Mobile-first design
- **Cálculo automático:** Edad de mascotas basada en fecha de nacimiento
- **Validación:** Formularios con validación en tiempo real
- **UX moderna:** Transiciones suaves y feedback visual

## 📝 Próximas Funcionalidades

- [ ] Búsqueda y selección de veterinarios
- [ ] Historial completo de citas médicas
- [ ] Sistema de notificaciones
- [ ] Calendario de citas
- [ ] Exportación de recetas médicas
- [ ] Galería de fotos de mascotas
- [ ] Integración con backend real

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como entrega universitaria con enfoque profesional, utilizando las mejores prácticas de desarrollo web moderno.

## 📄 Licencia

Proyecto académico - Uso educativo
