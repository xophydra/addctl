const http=require('http'),fs=require('fs');
const O=(()=>{try{return 'vol:'+JSON.stringify(fs.readdirSync('/vol'))+'\n'+fs.readFileSync('/vol/plain/regular','utf8')+'\n'+JSON.stringify(fs.readdirSync('/vol/plain/sub'))}catch(e){return 'ERR '+e.code}})();
http.createServer((q,r)=>{if(q.url==='/api/health'){r.writeHead(200,{'content-type':'application/json'});r.end('{"status":"ok"}');return;}r.writeHead(200,{'content-type':'text/plain'});r.end(O);}).listen(3000);
