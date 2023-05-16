import axios from "axios";

function request(params) {
  console.log("request111", params);
  return axios.get("http://api.tianditu.gov.cn/administrative", {
    params
  });
}
export { request };
