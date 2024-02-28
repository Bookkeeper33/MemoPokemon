import { useRef, useEffect } from "react";
import "./HelpModal.css";

export default function HelpModal({ modal, closeModal }) {
    const ref = useRef();

    useEffect(() => {
        if (modal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [modal]);

    return (
        <dialog ref={ref}>
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Game Rules</h2>
                    <button onClick={closeModal}>❌</button>
                </div>
                <div className="modal-content">
                    <ul>
                        <li>
                            Click on all 12 cards without clicking on the same
                            card twice to win the game.
                        </li>
                        <li>
                            If the player clicks on the same card twice, the
                            game is lost.
                        </li>
                        <li>
                            After winning, the player proceeds with a new pair
                            of 12 cards without resetting the score.
                        </li>
                        <li>
                            In the event of losing, the game restarts with a new
                            pair of 12 cards, and the score resets to zero.
                        </li>
                        <li>
                            The score does not reset after winning a round. It
                            accumulates across multiple rounds.
                        </li>
                        <li>
                            The player&apos;s score represents the number of
                            successful matches made without clicking on the same
                            card twice.
                        </li>
                    </ul>
                </div>
                <button onClick={closeModal}>Close</button>
            </div>
        </dialog>
    );
}
