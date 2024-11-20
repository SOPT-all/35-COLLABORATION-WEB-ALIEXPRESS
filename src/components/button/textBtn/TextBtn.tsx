import { BtnStyleMap, BtnSizeMap } from './TextBtnStyle';

interface TextBtnProps {
	btnText: string;
	onClick: () => void;
	color: 'red' | 'black' | 'gray';
	size: 'medium' | 'large';
}

const TextBtn = ({ btnText, onClick, color, size }: TextBtnProps) => {
	return (
		<button css={[BtnSizeMap[size], BtnStyleMap[color]]} onClick={onClick} type="button">
			{btnText}
		</button>
	);
};

export default TextBtn;
