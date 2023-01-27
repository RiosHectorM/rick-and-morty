export const validate = (userData) => {
  let errors = {};

  if (
    !userData.username.match(
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    )
  ) {
    errors.username = "El nombre de usuario debe ser un Email valido";
  }
  if (userData.username.length === 0) {
    errors.username = "EL nombre de usuario no debe estar vacio";
  }
  if (userData.username.length > 35) {
    errors.username = "El nombre de usuario no debe tener mas de 35 caracteres";
  }
  /**
    Minimo 6 caracteres
    Maximo 10
    Al menos una letra mayúscula
    Al menos una letra minucula
    Al menos un dígito
    No espacios en blanco
    Al menos 1 caracter especial */
  if (
    !userData.password.match(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/)
  ) {
    errors.password = "La contraseña debe tener al menos un numero un Caracter especial Una Mayuscula y Una minuscula";
  }
  if (!(userData.password.length >= 6 && userData.password.length <= 10)) {
    errors.password = "La contraseña debe tener entre 6 y 10 Caracteres";
  }
  return errors;
}
