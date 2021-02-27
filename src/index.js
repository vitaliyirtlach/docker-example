const app = require("express")() // Initialization a express app
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => { res.send("<h1>🐳 Hello Docker!</h1>") })
app.listen(PORT, () => console.log(`App is running: ${PORT}`))