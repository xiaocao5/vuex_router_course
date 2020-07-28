let [defaultName, defaultPassword, defaultClasses, defaultRemaining] = ['', '', '', 0];
try {
  if (localStorage.defaultName && localStorage.defaultPassword && localStorage.classes && localStorage.remaining) {
    [defaultName, defaultPassword, defaultClasses, defaultRemaining] = [localStorage.defaultName, localStorage.defaultPassword, localStorage.classes, localStorage.remaining];
  }
} catch(e) {
  console.log(e);
}
export default {
  name: defaultName,
  password: defaultPassword,
  classes: defaultClasses,
  remaining: defaultRemaining
}