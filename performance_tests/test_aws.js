import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: "5s", target: 5 },
    { duration: '5s', target: 10 },
    { duration: '2s', target: 50 },
    { duration: '2s', target: 10 },
    { duration: '5s', target: 5 },
  ],
  thresholds: {
    http_req_failed: ["rate < 0.01"],  // a taxa de falhas deve ser menor que 1%
  },
  ext: {
    loadimpact: {
      projectID: 3661625,
      name: 'AWS Cloud'
    }
  }
};

const API_URL = "https://ghky780l8d.execute-api.us-east-1.amazonaws.com/users";

export default function () {
  const res = http.get(`${API_URL}`);
  const jsonResponse = res.json();

  check(res, {
    "sucesso na requisição": (r) => r.status === 200,
    "resposta contém campo users": () => !!jsonResponse.users, 
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    "index.html": htmlReport(data),
  };
}
