import { TabLayout, btnStyle } from '@components/productPage/review/review/TabStyle';
import { useState } from 'react';

import ReviewTypeLabel from './ReviewTypeLabel';

interface TabProps {
	total: number;
	positive: number;
	negative: number;
}

const Tab = ({ total, positive, negative }: TabProps) => {
	const [activeTab, setActiveTab] = useState<string>('total');

	const handleTab = (e: React.MouseEvent<HTMLButtonElement>) => {
		setActiveTab(e.currentTarget.name);
	};

	return (
		<div>
			<div css={TabLayout}>
				<button type="button" name="total" css={btnStyle(activeTab === 'total')} onClick={handleTab}>
					전체 리뷰 ({total})
				</button>
				<button type="button" name="positive" css={btnStyle(activeTab === 'positive')} onClick={handleTab}>
					긍정 리뷰 ({positive})
				</button>
				<button type="button" name="negative" css={btnStyle(activeTab === 'negative')} onClick={handleTab}>
					비판 리뷰 ({negative})
				</button>
			</div>

			{activeTab === 'total' && <ReviewTypeLabel />}
		</div>
	);
};

export default Tab;
