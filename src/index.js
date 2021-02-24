const app = require("express")()

app.get("/", (req, res) => {
    res.send("Hello Docker!")
})

app.listen(process.env.PORT, () => {
    console.log(`App is no running: ${process.env.PORT}`)
})