import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: "5s", target: 50 },
    { duration: '5s', target: 50 },
    { duration: '2s', target: 1000 },
    { duration: '2s', target: 5000 },
    { duration: '5s', target: 50 },
  ],
  thresholds: {
    http_req_failed: ["rate < 0.01"],  // a taxa de falhas deve ser menor que 1%
    http_req_duration: ["p(95)<500"],  // 95% das solicitações devem completar abaixo de 500 ms
  },
  ext: {
    loadimpact: {
      projectID: 3644171,
      name: 'GET ALL Users'
    }
  }
};

const API_URL = "https://test-api.k6.io/users";

export default function () {
  const res = http.get(`${API_URL}`);

  check(res, {
    "sucesso na requisição": (r) => r.status === 200,
    "resposta contém user": (r) => r.json().some(user => user.hasOwnProperty('user')),
    "resposta contém email": (r) => r.json().some(user => user.hasOwnProperty('email')),
    "resposta contém password": (r) => r.json().some(user => user.hasOwnProperty('password')),
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    "index.html": htmlReport(data),
  };
}
