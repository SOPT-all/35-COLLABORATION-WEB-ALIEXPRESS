import { LargeBtnContainerStyle, largeBtnStyleMap } from './LargeBtnStyle';

interface LargeBtnProps {
	btnText: string;
	onClickFunc?: () => void;
	type: 'red' | 'black';
}
const LargeBtn = ({ btnText, onClickFunc, type }: LargeBtnProps) => {
	return (
		<button css={[LargeBtnContainerStyle, largeBtnStyleMap[type]]} onClick={onClickFunc} type="button">
			{btnText}
		</button>
	);
};

export default LargeBtn;
