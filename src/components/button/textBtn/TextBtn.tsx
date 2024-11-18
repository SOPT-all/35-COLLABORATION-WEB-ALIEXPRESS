import { BtnStyleMap, BtnSizeMap } from './TextBtnStyle';

interface TextBtnProps {
	btnText: string;
	onClick: () => void;
	type: 'red' | 'black' | 'gray';
	size: 'medium' | 'large';
}

const TextBtn = ({ btnText, onClick, type, size }: TextBtnProps) => {
	return (
		<button css={[BtnSizeMap[size], BtnStyleMap[type]]} onClick={onClick} type="button">
			{btnText}
		</button>
	);
};

export default TextBtn;
