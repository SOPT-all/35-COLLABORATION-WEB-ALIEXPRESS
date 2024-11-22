import { tagStyleMap } from './FreeTagStyle';

interface FreeTagProps {
    text: string;
    color: 'red' | 'gray';
}

const FreeTag = ({ text, color }: FreeTagProps) => (
    <div css={tagStyleMap[color]}>{text}</div>
);

export default FreeTag;