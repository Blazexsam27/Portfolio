// All the project objects are here :-
const crypto_expert_logo = require("../../assets/images/logos/crypto_expert_logo.png");
const firstnews_logo = require("../../assets/images/logos/firstnews_logo.png");
const blazestore_logo = require("../../assets/images/logos/blazestore_logo.png");
const text_util_logo = require("../../assets/images/logos/text_util.png");
const leave_management_logo = require("../../assets/images/logos/leave_management.png");
const getgood_logo = require("../../assets/images/logos/getgood_logo.png");

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
  date: "22/10/2022",
};

const GetGood = {
  title: "GetGood",
  sneakpeek: `An ecommerce website built using django framework, it
    supports order placement, order tracking, order cancellation
    and many more features.`,
  description: `
  GetGood is an e-commerce single page web application built using ReactJs. 
          It is capable of product management, cart management, category and price filters, shipment tracking, customer query support.
          The front-end UI is built using CSS3 and react style components and is perfectly responsive for all type of devices.
      `,
  host: "get-good.netlify.app",
  logo: getgood_logo,
  date: "12/08/2021",
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
  host: "",
  logo: blazestore_logo,
  date: "30/06/2022",
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
  host: "",
  logo: crypto_expert_logo,
  date: "Ongoing",
};

const TextUtil = {
  title: "Text Util",
  sneakpeek: `A text utility web application built using reactjs, have features like plagiarism check, basic text
  statistics, blank space removal ...`,
  description: `
    A text utility web application built using reactjs, have features like plagiarism check, basic text
    statistics, blank space removal, case conversion etc. 
    It also has light theme and dark theme, capable of checking 5000+ words for plagiarism at once.
      `,
  host: "",
  logo: text_util_logo,
  date: "02/05/2021",
};

const LeaveManagement = {
  title: "LeaveManagement",
  sneakpeek: `An online web application to manage leaves of employees, have authentication features and refresh token
  system, basic table to show all applied leaves ...`,
  description: `
  An online web application to manage leaves of employees, have authentication features and refresh token
  system, basic table to show all applied leaves.
  Easy leave creation and updation facility, custom filters for list of leaves of a particular employee.
  The web application is built using ReactJs + ExpressJs + Mongodb and is highly scalable.
      `,
  host: "",
  logo: leave_management_logo,
  date: "22/10/2022",
};

module.exports = {
  GetGood,
  CryptoExpert,
  FirstNews,
  BlazeStore,
  TextUtil,
  LeaveManagement,
};
