import { IcBoxGray16, IcShopGray16, IcBatteryGray16, IcPortGray16, IcPhoneGray16, IcChargeGray16 } from '@assets/icons';
import { infoTableLayoutStyle, infoTableStyle, infoTitleStyle } from '@components/infoTable/InfoTableStyle';

const InfoTable = () => (
	<section css={infoTableLayoutStyle}>
		<h1 css={infoTitleStyle}>상품 정보</h1>
		<table css={infoTableStyle}>
			<tbody>
				<tr>
					<th>
						<IcBoxGray16 />
						무게
					</th>
					<td>100g</td>
					<th>
						<IcPortGray16 />
						포트
					</th>
					<td>USB-A</td>
				</tr>
				<tr>
					<th>
						<IcShopGray16 />
						포장 여부
					</th>
					<td>포장됨</td>
					<th>
						<IcPhoneGray16 />
						호환
					</th>
					<td>다양한 기기</td>
				</tr>
				<tr>
					<th>
						<IcBatteryGray16 />
						용량
					</th>
					<td>10000mAh</td>
					<th>
						<IcChargeGray16 />
						충전 속도
					</th>
					<td>고속 충전</td>
				</tr>
			</tbody>
		</table>
	</section>
);

export default InfoTable;
