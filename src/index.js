const app = require("express")()

app.get("/", (req, res) => {
    res.send("Hello World 111")
})
const PORT = process.env.PORT
console.log(PORT)

app.listen(PORT || 5000, () => {
    console.log("App is no running: " + PORT || 5000)
})