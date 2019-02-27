import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x0ACB7436fDF4c8F21DE67aF051ce66fDF156e219'
);

export default instance;