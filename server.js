import app from './src/app.js'
import dotenv from 'dotenv';

dotenv.config()
const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})