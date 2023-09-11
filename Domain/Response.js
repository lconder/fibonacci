class Response {
  static single(res, data) {
    return res.status(200).json(data);
  }
}
module.exports = Response;
