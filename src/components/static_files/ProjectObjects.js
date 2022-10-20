// All the project objects are here :-
const crypto_expert_logo = require("../../assets/images/logos/crypto_expert_logo.png");
const firstnews_logo = require("../../assets/images/logos/firstnews_logo.png");
const mycart_logo = require("../../assets/images/logos/mycart_logo.png");
const blazestore_logo = require("../../assets/images/logos/blazestore_logo.png");

const FirstNews = {
  title: "FirstNews",
  sneakpeek: `An online news web application built using Reactjs + ExpressJs and powered by Newsapi.com
      have certain features like category selection, recent news...
    `,
  description: `
    An online news web application built using Reactjs + ExpressJs and powered by Newsapi.com
    have certain features like category selection, recent news panel, daily updates, and related news
    section.
    Completely responsive for all type of screens.
      `,
  logo: firstnews_logo,
};

const MyCart = {
  title: "MyCart",
  sneakpeek: `An ecommerce website built using django framework, it
    supports order placement, order tracking, order cancellation
    and many more features.`,
  description: `
          MyCart is an e-commerce web application built using ReactJS and Django rest framework. 
          It is capable of product management and cart management along with an admin panel with CRUD operation.
          The front-end UI is built using CSS3 and Bootstrap5 and is perfectly responsive for all type of devices.
      `,
  logo: mycart_logo,
};

const BlazeStore = {
  title: "BlazeStore",
  sneakpeek: `A Huge online store for custom web components created using
  HTML, CSS & JS. The components are completely free and open
  source...`,
  description: `
        BlazeStore is an online CSS component market built using ReactJS + Django, with postgresql database. It 
        offers a lot of awesome CSS component built using vanilla CSS3 which are completely editable and are completely
        free to use.
        The project is still ongoing and have future plans for implementing contributions of CSS components, and 
        user authentication.
    `,
  logo: blazestore_logo,
};

const CryptoExpert = {
  title: "CryptoExpert",
  sneakpeek: `CryptoExpert is an AI based statistical and regression tool built using ReactJS, NodeJS and Python. 
    It uses highly trained AI to predict the market...`,
  description: `
          CryptoExpert is an AI based statistical and regression tool built using ReactJS, NodeJS and Python. 
          It uses highly trained AI to predict the market value for some of the most popular crypto currencies 
          (Bitcoin, Ethereum, Polygon etc.).
          It uses CoinGecko.com to fetch data related to crypto currency market and uses that data to update
          statistics and predict the outcome for next few days.
      `,
  logo: crypto_expert_logo,
};

module.exports = { MyCart, CryptoExpert, FirstNews, BlazeStore };
