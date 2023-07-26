export function getList(addresses) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Adressbuch</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <h1>Adressbuch</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>löschen</th>
          </tr>
        </thead>
        <tbody>
          ${addresses.map(createRow).join('')}
        </tbody>
      </table>
    </body>
  </html>`;
}

function createRow(address) {
  return `<tr>
  <td>${address.id}</td>
  <td>${address.firstname}</td>
  <td>${address.lastname}</td>
  <td><a href="/delete/${address.id}">löschen</a></td>
</tr>`;
}