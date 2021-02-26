const app = require("express")() // Initialization a express app
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("🐳 Hello Docker!")
})

app.listen(PORT, () => console.log(`App is running: ${PORT}`))