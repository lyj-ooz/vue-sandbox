import axios from "axios";

// 1. http 통신에 대한 request & response와 관련된 기본 설정 작성하기
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. api 함수들을 정리
function fetchNewsList() {
  return axios.get(config.baseUrl + "news/1.json");
}
function fetchJobsList() {
  return axios.get(config.baseUrl + "jobs/1.json");
}
function fetchAskList() {
  return axios.get(config.baseUrl + "ask/1.json");
}
function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItem(itemID) {
  return axios.get(`${config.baseUrl}item/${itemID}.json`);
}

// 3. 내보내기
export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem };
