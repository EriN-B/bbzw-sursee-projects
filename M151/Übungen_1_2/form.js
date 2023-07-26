export function getForm(addresses, id) {
  let address = {
    id: '',
    firstname: '',
    lastname: '',
    city: '',
  };
  if (id) {
    address = addresses.find((adr) => adr.id === +id);
  }
  const form = `<!DOCTYPE html>
<html>
  <head>
    <title>Adressbuch</title>
    <meta charset="utf-8">
  </head>
  <body>
    <form action="/save" method="POST">
      <input type="hidden" id="id" name="id" value="${address.id}" />
      <div>
        <label for="firstname">Vorname</label>
        <input type="text" id="firstname" name="firstname" value="${address.firstname}" />
      </div>
      <div>
        <label for="lastname">Nachname</label>
        <input type="text" id="lastname" name="lastname" value="${address.lastname}" />
      </div>
      <div>
        <label for="city">Ort</label>
        <input type="text" id="city" name="city" value="${address.city}" />
      </div>
      <div>
        <button type="submit">speichern</button>
      </div>
    </form>
  </body>
</html>`;
  return form;
}
