export const pressOnlyNumbers = (e) => {
  var charCode = e.which ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return e.preventDefault()
  }
}
