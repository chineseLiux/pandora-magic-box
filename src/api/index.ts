
import axios from "axios";

export const get_captcha = () => axios.get('/api/system/get_captcha');
