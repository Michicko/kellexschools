
const getHome = async (req, res, next) => {
  try {
    res.status(200).render("base");
  } catch (error) {
    next(error);
  }
};


module.exports = {
    getHome,
}