import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
	children?: any;
	triggerText?: string;
	closeButton?: boolean;
	onDocumentUpdate?: () => void;
	disabled?: boolean;
};

const Modal: React.FC<ModalProps> = ({
	children,
	triggerText,
	closeButton,
	onDocumentUpdate,
	disabled,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const popoverRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: any) => {
		if (popoverRef.current && !popoverRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	const togglePopover = () => {
		setIsOpen(!isOpen);
	};

	const closePopover = () => {
		setIsOpen(false);
		if (onDocumentUpdate) {
			onDocumentUpdate();
		}
	};

	const modalContent = (
		<div
			onClick={handleClickOutside}
			className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-50"
		>
			<div
				ref={popoverRef}
				className="absolute p-4 bg-bkg shadow-md shadow-grey border-2 border-grey rounded-md
          sm:w-[85vw] md:w-[450px] lg:w-[600px]"
			>
				{children({ closePopover })}
				{closeButton && (
					<button
						className="absolute left-7 bottom-4 w-20"
						onClick={() => togglePopover()}
					>
						Cancel
					</button>
				)}
			</div>
		</div>
	);

	return (
		<>
			<button
				className="flex w-full"
				onClick={togglePopover}
				disabled={disabled}
			>
				{triggerText}
			</button>
			{isOpen && ReactDOM.createPortal(modalContent, document.body)}
		</>
	);
};

export default Modal;
