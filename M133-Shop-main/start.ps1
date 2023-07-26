cd frontend
npm install --prefer-offline --no-audit
ng build --source-map=false
cd ..
deno run --allow-net --allow-read server.js