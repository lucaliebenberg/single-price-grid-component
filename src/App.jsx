import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="card__top">
          <h2 className="card__topTitle">Join our community</h2>
          <p className="card__topPara">
            30-day, hassle-free money back guarantee
          </p>
          <p className="card__topPara2">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious and about honing
            their skills
          </p>
        </div>
        <div className="card__bottomWrap">
          <div className="card__bottomLeft">
            <h4 className="card__bottomLeftTitle">Monthly Subscription</h4>
            <div className="card__bottomPriceWrap">
              <h3 className="card__bottomPrice">
                $29 <span className="card__bottomPriceMonth">per month</span>
              </h3>
            </div>
            <p className="card__bottomAccess">
              Full access for less than $1 a day
            </p>
            <div className="card__bottomButtonWrap">
              <button className="card__bottomBtn">Sign Up</button>
            </div>
          </div>
          <div className="card__bottomRight">
            <p className="card__bottomRightTitle">Why Us</p>
            <p className="card__bottomRightSubtitle">
              Tutorials by industry experts Peer &amp; expert code review Coding
              exercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
