/**
 * Classe de erro customizada para
 * avisos.
 *
 * @author PP DEV
 */
class WarningError extends Error {
  constructor(message) {
    super(message);
    this.name = "WarningError";
  }
}

module.exports = {
  WarningError,
};
