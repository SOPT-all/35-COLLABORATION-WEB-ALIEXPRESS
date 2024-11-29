import CardList from '@components/productPage/review/review/CardList';
import ReviewTypeLabel from '@components/productPage/review/review/ReviewTypeLabel';
import { tabLayout, btnStyle } from '@components/productPage/review/review/TabStyle';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

interface TabProps {
	total: number;
	positive: number;
	negative: number;
	isOriginal: boolean;
}

const Tab = ({ total, positive, negative, isOriginal }: TabProps) => {
	const productId = 1;

	const [activeTab, setActiveTab] = useState<string>('total');
	const theme = useTheme();

	const handleTab = (e: React.MouseEvent<HTMLButtonElement>) => {
		setActiveTab(e.currentTarget.name);
	};

	return (
		<div>
			<div css={tabLayout(theme, activeTab === 'total')}>
				<button type="button" name="total" css={btnStyle(theme, activeTab === 'total')} onClick={handleTab}>
					전체 리뷰 ({total})
				</button>
				<button type="button" name="positive" css={btnStyle(theme, activeTab === 'positive')} onClick={handleTab}>
					긍정 리뷰 ({positive})
				</button>
				<button type="button" name="negative" css={btnStyle(theme, activeTab === 'negative')} onClick={handleTab}>
					비판 리뷰 ({negative})
				</button>
			</div>
			{activeTab === 'total' && <ReviewTypeLabel />}
			<CardList activeTab={activeTab} isOriginal={isOriginal} productId={productId} />
		</div>
	);
};

export default Tab;
