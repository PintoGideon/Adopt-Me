import React, { useEffect, useRef, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal: FunctionComponent = ({ children }) => {
	const elRef = useRef(document.createElement('div'));

	useEffect(() => {
		if (!modalRoot) {
			return;
		}

		modalRoot.appendChild(elRef.current);

		//If you return a function from useEffect, it is basically the cleanup function.
		return () => {
			modalRoot.removeChild(elRef.current);
		};
	}, []);

	return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
