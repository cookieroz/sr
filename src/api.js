import axios from 'axios';

const token = "H3TM28wjL8R4#HTnqk?c";

export default axios.create({
	baseURL: "https://shakespeare.podium.com/api/reviews/",
	headers: { "x-api-key": token },
});