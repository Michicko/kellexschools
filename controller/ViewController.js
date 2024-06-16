const articles = [
  // {
  //   id: 1,
  //   title: 'Article 1 Lorem Ipsum Dolor Sit Amet',
  //   image: 'article.jpg',
  //   body: 'hello from article 1'
  // },
  // {
  //   id: 2,
  //   title: 'Article 2 Lorem Ipsum Dolor Sit Amet deer ',
  //   image: 'article.jpg',
  //   body: 'hello from article 2'
  // },
  // {
  //   id: 3,
  //   title: 'Article 3 Lorem Ipsum Dolor Sit Ameterrr',
  //   image: 'article.jpg',
  //   body: 'hello from article 3'
  // },
]

const events = [
  {
    id: 1,
    title: 'event 1',
    body: 'hello from event 1'
  },
  {
    id: 2,
    title: 'event 2 Lorem ipsum dolor sit amet consectetur adipisicing',
    body: 'hello from event 2'
  },
  {
    id: 3,
    title: 'event 3',
    body: 'hello from event 3'
  },
]

const getHome = async (req, res, next) => {
  try {
    res.status(200).render("base", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const getAbout = async (req, res, next) => {
  try {
    res.status(200).render("about", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const getAdmission = async (req, res, next) => {
  try {
    res.status(200).render("admission", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const getLifeAtKellex = async (req, res, next) => {
  try {
    res.status(200).render("life-at-kellex", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const getGallery = async (req, res, next) => {
  try {
    res.status(200).render("gallery", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const  getNewsAndEvents = async (req, res, next) => {
  try {
    res.status(200).render("news-and-events", {
      currentUrl: req.url,
      articles,
      events
    });
  } catch (error) {
    next(error);
  }
};

const  getEvent = async (req, res, next) => {
  const {id} = req.params;
  const event = events.find((el) => el.id === id * 1);
  try {
    res.status(200).render("event", {
      currentUrl: req.url,
      articles,
      event
    });
  } catch (error) {
    next(error);
  }
};

const getError404 = async (req, res, next) => {
  try {
    res.status(404).render("error404", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const  getLogin = async (req, res, next) => {
  try {
    res.status(200).render("login", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const  getAcademics = async (req, res, next) => {
  try {
    res.status(200).render("academics", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

const getNews = async (req, res, next) => {
  try {
    res.status(200).render("news", {
      currentUrl: req.url,
      articles
    });
  } catch (error) {
    next(error);
  }
};

const getSingleNews = async (req, res, next) => {
  const {id} = req.params;
  const article = articles.find((el) => el.id === id * 1);
  try {
    res.status(200).render("singleNews", {
      currentUrl: req.url,
      article,
      articles
    });
  } catch (error) {
    next(error);
  }
};

const getMaintenance = async (req, res, next) => {
  try {
    res.status(503).render("maintenance", {
      currentUrl: req.url,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHome,
  getAbout,
  getAdmission,
  getLifeAtKellex,
  getGallery,
  getNewsAndEvents,
  getLogin,
  getAcademics,
  getNews,
  getSingleNews,
  getEvent,
  getMaintenance,
  getError404
};
