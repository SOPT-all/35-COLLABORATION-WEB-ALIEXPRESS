import { BtnStyleMap, BtnSizeMap, defaultBtnStyle } from './TextBtnStyle';

interface TextBtnProps {
	btnText: string;
	onClick?: () => void;
	color: 'red' | 'black' | 'gray';
	size: 'medium' | 'large';
}

const TextBtn = ({ btnText, onClick, color, size }: TextBtnProps) => (
	<button css={[BtnSizeMap[size], BtnStyleMap[color], defaultBtnStyle]} onClick={onClick} type="button">
		{btnText}
	</button>
);

export default TextBtn;
