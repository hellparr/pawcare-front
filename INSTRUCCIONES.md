# 🚀 Instrucciones para Ejecutar PawCare

## Paso 1: Instalar Dependencias

Ejecuta el siguiente comando en la terminal desde la raíz del proyecto:

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- React 18.3.1
- React Router DOM 6.26.1
- TailwindCSS 3.4.10
- Lucide React (iconos)
- date-fns (manejo de fechas)
- Y todas las dependencias de desarrollo

## Paso 2: Iniciar el Servidor de Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5173` (o el puerto que Vite asigne).

## Paso 3: Acceder a la Aplicación

Abre tu navegador y ve a la URL que muestra la terminal (generalmente `http://localhost:5173`).

## 🔐 Credenciales de Prueba

### Dueños de Mascotas

1. **Juan Pérez** (2 mascotas: Max y Luna)
   - Email: `juan.perez@email.com`
   - Contraseña: cualquiera

2. **María Gómez** (2 mascotas: Rocky y Mimi)
   - Email: `maria.gomez@email.com`
   - Contraseña: cualquiera

3. **Carlos Silva** (1 mascota: Coco)
   - Email: `carlos.silva@email.com`
   - Contraseña: cualquiera

### Veterinarios

1. **Dra. María Martínez** (Medicina General)
   - Email: `maria.martinez@pawcare.com`
   - Contraseña: cualquiera

2. **Dr. Carlos Rodríguez** (Cirugía)
   - Email: `carlos.rodriguez@pawcare.com`
   - Contraseña: cualquiera

3. **Dra. Ana López** (Dermatología)
   - Email: `ana.lopez@pawcare.com`
   - Contraseña: cualquiera

## 📱 Flujo de Uso

### Como Dueño de Mascota:

1. Selecciona "Dueño de Mascota" en la pantalla inicial
2. Ingresa con cualquiera de los emails de dueños
3. Verás tu perfil con:
   - Tu información personal
   - Tus mascotas registradas (con edad calculada automáticamente)
   - Información de tu veterinario asignado
4. Puedes registrar nuevas mascotas haciendo clic en "Registrar Mascota"

### Como Veterinario:

1. Selecciona "Veterinario" en la pantalla inicial
2. Ingresa con cualquiera de los emails de veterinarios
3. Verás tu dashboard con:
   - Tu información profesional
   - Todas las mascotas a tu cargo
4. Haz clic en cualquier mascota para registrar una cita médica
5. Completa el formulario con:
   - Fecha y hora de la cita
   - Motivo de consulta
   - Historia clínica
   - Procedimientos
   - Receta médica (opcional)
   - Observaciones y recomendaciones

## 🎨 Características Destacadas

- ✅ **Diseño Responsive**: Se adapta a móviles, tablets y desktop
- ✅ **Cálculo Automático de Edad**: Las mascotas muestran su edad calculada desde la fecha de nacimiento
- ✅ **Razas Dinámicas**: Al seleccionar el tipo de mascota, las razas se actualizan automáticamente
- ✅ **Navegación Intuitiva**: Fácil de usar con iconos y colores distintivos
- ✅ **Validación de Formularios**: Todos los campos requeridos están validados
- ✅ **Persistencia de Sesión**: Tu sesión se mantiene al recargar la página

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Compila para producción
npm run preview      # Vista previa de la build de producción
```

## 📂 Estructura de Archivos Creados

```
pawcare-front/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Select.tsx
│   │   ├── Layout.tsx
│   │   └── PetCard.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── pages/
│   │   ├── owner/
│   │   │   ├── OwnerProfile.tsx
│   │   │   └── RegisterPet.tsx
│   │   ├── veterinarian/
│   │   │   ├── VeterinarianDashboard.tsx
│   │   │   └── AppointmentForm.tsx
│   │   ├── Login.tsx
│   │   └── LoginSelection.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── dateUtils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

## ⚠️ Notas Importantes

1. **Datos Mock**: La aplicación usa datos simulados (mockData.ts). No hay backend real.
2. **Contraseña**: Cualquier contraseña funciona para el login (es solo para demostración).
3. **Persistencia**: Los datos no se guardan realmente, solo se simulan las operaciones.

## 🐛 Solución de Problemas

Si encuentras errores:

1. **Error de dependencias**: Elimina `node_modules` y `package-lock.json`, luego ejecuta `npm install` de nuevo
2. **Puerto ocupado**: Vite asignará automáticamente otro puerto si el 5173 está ocupado
3. **Errores de TypeScript**: Asegúrate de tener TypeScript instalado globalmente o usa la versión local del proyecto

## 🎓 Proyecto Académico

Este es un proyecto desarrollado para entrega universitaria con enfoque profesional, implementando:
- Arquitectura limpia y escalable
- Componentes reutilizables
- Tipado fuerte con TypeScript
- Mejores prácticas de React
- UI/UX moderna y profesional

¡Disfruta explorando PawCare! 🐾
