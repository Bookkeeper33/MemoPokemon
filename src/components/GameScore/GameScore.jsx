import ball from "../../assets/pokeball-pokemon-svgrepo-com.svg";
import "./GameScore.css";

function Header({ score, bestScore }) {
    return (
        <header>
            <div className="title">
                <h1 style={{ color: "white" }}>
                    Memo<span style={{ color: "red" }}>Pokemon</span>
                </h1>
                <img src={ball} alt="pokeball" width="40px" height="40px" />
            </div>
            <ul className="score">
                <li>🎉Score: {score}</li>
                <li>🏆Best score: {bestScore}</li>
            </ul>
        </header>
    );
}

export default Header;
