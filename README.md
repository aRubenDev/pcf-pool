# PCF Pool — DQS Consulting

Biblioteca de controles PCF (Power Apps Component Framework) para Dynamics 365
model-driven apps, desarrollados por Ángel Rubén García Guerra.

## Controles disponibles

| Control | Descripción | Estado |
|--------|-------------|--------|
| [Progress Bar Field](./controls/progress-bar-field/) | Visualiza un campo numérico como barra de progreso | 🚧 En desarrollo |

## Stack

React 18 · TypeScript · Fluent UI v9 · Power Apps Component Framework

## Instalación

Cada control incluye una solución `.zip` lista para importar en tu entorno
de Dataverse. Ver el README individual de cada control.

## Desarrollo local

Requisitos: Node.js 18+, Power Platform CLI (`pac`), acceso a un entorno
de Dataverse con permisos de System Customizer.

```bash
cd controls/NOMBRE-DEL-CONTROL
npm install
npm start        # harness local en localhost:8181
pac pcf push     # deploy directo al entorno dev
```

## Licencia

MIT — desarrollado por [arubendev.me](https://arubendev.me)