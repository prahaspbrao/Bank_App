const {config} = require("dotenv")
config({
    path:'.env'
})

const app = require("./src/app")
const { ConnectDB } = require("./src/config/auth.config")
const port = process.env.PORT || 3000
ConnectDB();

app.listen(port , ()=>{
    console.log("App listening at port " + port);
})
