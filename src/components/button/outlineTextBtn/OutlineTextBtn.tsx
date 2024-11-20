import { defaultBtnStyle, btnSizeMap } from './OutlineTextBtnStyle';

interface OutlineTextBtnProps {
	btnText: string;
	onClick?: () => void;
	size: 'small' | 'medium';
}

const OutlineTextBtn = ({ btnText, onClick, size }: OutlineTextBtnProps) => (
	<button type="button" css={[defaultBtnStyle, btnSizeMap[size]]} onClick={onClick}>
		{btnText}
	</button>
);

export default OutlineTextBtn;
