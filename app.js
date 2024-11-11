const express = require("express")
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080

app.use(express.static("dist"))

app.listen(PORT + 1, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get("/health", (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw("error...  ")
  res.send("ok")
})