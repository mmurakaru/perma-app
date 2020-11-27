module.exports = function() {
  return (req, res, next) => {
    console.log(req.method, req.body, req.url)
    next()
  }
}

