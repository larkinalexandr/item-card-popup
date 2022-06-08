import React, { useEffect } from "react";
import { Close, Wrapper, Header } from "./styled";

export default function PopUp({ onClose, title, children }) {
    const handlerEsc = (evt) => {
        if (evt.keyCode === 27) {
            onClose && onClose();
        }
    };

    useEffect(() => {
        console.log('Обработчик добавлен');
        document.addEventListener("keydown", handlerEsc);
        return () => {
            console.log('Обработчик удален');
            document.removeEventListener("keydown", handlerEsc);
        };
    }, []);
    return (
        <Wrapper>
            <Header>
                {title}{" "}
                <Close size="small" onClick={onClose}>
                    x
                </Close>
            </Header>
            {children}
        </Wrapper>
    );
}
