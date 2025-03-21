import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center text-center">
        <p className="text-3xl font-bold underline">Arcana Haven Prototype</p>
        <nav>
          <Link to="/profile">
            <p className="text-xl font-bold">Personal</p>
          </Link>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/reading-collection">Reading Collection</Link>
            </li>
            <li>
              <Link to="/">Sign Out</Link>
            </li>
          </ul>

          <Link to="/tarot">
            <p className="text-xl font-bold">Tarot Readings</p>
          </Link>
          <ul>
            <li>
              <Link to="/tarot/general">General Tarot</Link>
            </li>
            <li>
              <Link to="/tarot/question">Ask a Question</Link>
            </li>
            <li>
              <Link to="/tarot/yesno">Yes/No Tarot</Link>
            </li>
          </ul>

          <Link to="/cards">
            <p className="text-xl font-bold">Card Meanings</p>
          </Link>
          <ul>
            <li>
              <Link to="/cards/major-arcana">Major Arcana</Link>
            </li>
            <li>
              <Link to="/cards/wands">Wands</Link>
            </li>
            <li>
              <Link to="/cards/cups">Cups</Link>
            </li>
            <li>
              <Link to="/cards/swords">Swords</Link>
            </li>
            <li>
              <Link to="/cards/pentacles">Pentacles</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/reading-collection" element={<div>Reading Collection</div>} />
          <Route path="/tarot/general" element={<div>General Tarot Reading</div>} />
          <Route path="/tarot/question" element={<div>Ask a Question</div>} />
          <Route path="/tarot/yesno" element={<div>Yes/No Tarot</div>} />
          <Route path="/cards/major-arcana" element={<div>Major Arcana Meanings</div>} />
          <Route path="/cards/wands" element={<div>Wands Meanings</div>} />
          <Route path="/cards/cups" element={<div>Cups Meanings</div>} />
          <Route path="/cards/swords" element={<div>Swords Meanings</div>} />
          <Route path="/cards/pentacles" element={<div>Pentacles Meanings</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
