exports.handler = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));

  // Do some business logic

  let results = { message: "Hello from the serverless api" };

  return sendResponse(200, results);
};

// Response to the api gateway
const sendResponse = (statusCode, data) => {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: data,
    }),
  };
};
