interface Summary {
  [k: string]: {
    totalRequests: number;
    errorRequests: number;
    averageResponseTime: number;
    responseTimeSum: number;
    errorRate: string;
  }
}

function summarizeLogs(logs: string[]) {
  const summary: Summary = {};

  logs.forEach(log => {
    // split
    const logGroups = log.split(" ");
    const httpCode = logGroups[1];
    const responseTime = logGroups[2].split("ms")[0];
    const endpoint = logGroups[3];

    console.log(responseTime);

    // validate if the endpoint already have an entry, otherwise initialize it
    if (!summary[endpoint]) {
      summary[endpoint] = {
        totalRequests: 0,
        errorRequests: 0,
        averageResponseTime: 0,
        responseTimeSum: 0,
        errorRate: "",
      };
    }

    summary[endpoint].totalRequests += 1;
    summary[endpoint].errorRequests += Number(/[4|5]\d\d/g.test(httpCode));
    summary[endpoint].responseTimeSum += Number(responseTime.split("ms")[0]);
    summary[endpoint].averageResponseTime = Math.round((summary[endpoint].responseTimeSum / summary[endpoint].totalRequests));
    summary[endpoint].errorRate = `${((summary[endpoint].errorRequests / summary[endpoint].totalRequests) * 100).toFixed(2)}%`;
  });

  return summary;
}

const logs = [
  "[2025-02-19T12:00:00Z] 200 120ms /users",
  "[2025-02-19T12:00:01Z] 404 30ms /users",
  "[2025-02-19T12:00:02Z] 500 300ms /products",
  "[2025-02-19T12:00:03Z] 200 50ms /users",
  "[2025-02-19T12:00:04Z] 200 20ms /products",
  "[2025-02-19T12:00:05Z] 503 500ms /products"
];

const summary = summarizeLogs(logs);

console.log(summary);


// Additional considerations

/**
 * Kojo encounters a lot of data - how would you change your code to accommodate
 * millions of log lines?
 * 
 * A: if the data is fixed, we could process it through streams or even chunks. That way we could tune the service
 * to work through the data bit by bit.
 * 
 * Also, if this evolves to a infite flux of logs, we could diverge to another strategy having a separate service to
 * process each log separately and re-emit it as a message/event to a second service which would be responsible to
 * keep the metrics up-to-date.
 */