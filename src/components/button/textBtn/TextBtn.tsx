import { btnStyleMap, btnSizeMap, defaultBtnStyle } from './TextBtnStyle';

interface TextBtnProps {
	btnText: string;
	onClick?: () => void;
	color: 'red' | 'black' | 'gray';
	size: 'medium' | 'large';
}

const TextBtn = ({ btnText, onClick, color, size }: TextBtnProps) => (
	<button css={[btnSizeMap[size], btnStyleMap[color], defaultBtnStyle]} onClick={onClick} type="button">
		{btnText}
	</button>
);

export default TextBtn;
