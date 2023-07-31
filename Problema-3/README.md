# Validador de Contraseñas

Hola, aquí está mi proyecto de validador de contraseñas. Este programa verifica si una contraseña ingresada cumple con las reglas de seguridad requeridas.

## Funcionalidad de la aplicación

Este programa consiste en una función llamada `validatePassword()` que verifica si una contraseña cumple con ciertos criterios de seguridad. La contraseña debe:

- Tener al menos 16 caracteres.
- Contener al menos una letra minúscula y una mayúscula.
- No tener dos caracteres idénticos seguidos.
- Contener al menos 4 números.
- No tener dos números idénticos seguidos.
- Contener al menos 2 caracteres especiales (!@#$%^&\*-\_+=?) sin repetirse y no pueden estar juntos.
- No contener el número 0.
- No contener espacios.

Si la contraseña cumple con todos estos requisitos, la función `validatePassword()` devuelve `true`. Si no, devuelve `false`.
