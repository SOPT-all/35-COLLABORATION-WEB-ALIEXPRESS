import { DividerMedium } from '@assets/icons';
import {
	InfoTableContainerStyle,
	infoTableLayoutStyle,
	infoTableStyle,
	infoTitleStyle,
} from '@components/infoTable/InfoTableStyle';

const InfoTable = () => (
	<article css={InfoTableContainerStyle}>
		<DividerMedium />
		<section css={infoTableLayoutStyle}>
			<h1 css={infoTitleStyle}>상품 정보</h1>
			<table css={infoTableStyle}>
				<tbody>
					<tr>
						<th>무게</th>
						<td>100g</td>
						<th>포트</th>
						<td>USB-A</td>
					</tr>
					<tr>
						<th>포장 여부</th>
						<td>포장됨</td>
						<th>호환</th>
						<td>다양한 기기</td>
					</tr>
					<tr>
						<th>용량</th>
						<td>10000mAh</td>
						<th>충전 속도</th>
						<td>고속 충전</td>
					</tr>
				</tbody>
			</table>
		</section>
	</article>
);

export default InfoTable;
