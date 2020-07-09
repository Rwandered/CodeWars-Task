// Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this.toString().toUpperCase() === this.toString()
}