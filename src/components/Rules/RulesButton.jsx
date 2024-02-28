import "./RulesButton.css";
import Icon from "@mdi/react";
import { mdiHelp } from "@mdi/js";
import { useState } from "react";
import HelpModal from "../Modals/HelpModal";

function RulesButton() {
    const [modal, setModal] = useState(false);

    return (
        <footer>
            <button className="game-rules" onClick={() => setModal(true)}>
                <Icon
                    path={mdiHelp}
                    size={1}
                    title="help"
                    color="rgb(0, 40, 97)"
                />
            </button>
            <HelpModal modal={modal} closeModal={() => setModal(false)} />
        </footer>
    );
}

export default RulesButton;
