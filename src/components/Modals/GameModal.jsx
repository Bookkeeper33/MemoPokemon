import { useRef, useEffect } from "react";

import pikachu from "../../assets/pikahappy.gif";
import sadPikachu from "../../assets/tired-pikachu.gif";

import "./GameModal.css";

export default function GameModal({ openModal, closeModal, score, isWin }) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog ref={ref} className="modal">
            <div className="modal-content">
                <h2>You {isWin ? "won" : "lost"}!</h2>
                <img src={isWin ? pikachu : sadPikachu} alt="pikachu" />
                <p>Your final score is {score}.</p>
                <button className="modal-button" onClick={closeModal}>
                    Continue
                </button>
            </div>
        </dialog>
    );
}
