let login = prompt('login','');
let message = (login == "employee") ? "hello":
              (login == "director") ? "greeting":
              (login == "") ? "no login":
              '';

alert(message);