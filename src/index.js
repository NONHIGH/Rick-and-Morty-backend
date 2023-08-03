const server = require('./app');
const PORT = 3001;


server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

