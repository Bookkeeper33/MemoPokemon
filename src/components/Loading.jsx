import ball from "../assets/pokeball-pokemon-svgrepo-com.svg";
import "./Loading.css";

export default function Loading() {
    return (
        <div className="wrapper">
            <img src={ball} alt="pokeball" width="100px" height="100px" />
        </div>
    );
}
