const data = [
  { type: "Class 3 Individual Signing DSC", price: 1300 },
  { type: "Class 3 Individual Combo DSC", price: 2200 },
  { type: "Class 3 Organization Combo DSC", price: 2200 },
  { type: "DGFT Organization Signing DSC", price: 2200 },
  { type: "Foreign National Digital Signature Certificate", price: 4500 },
];

exports.handler = async (event) => {
  try {
    const query = event.queryStringParameters.q?.toLowerCase() || "";
    const includeToken = event.queryStringParameters.token === "true";
    const threeYearOption = event.queryStringParameters.threeYear === "true";

    // Filter results based on query
    let filteredData = data.filter((dsc) =>
      dsc.type.toLowerCase().includes(query)
    );

    if (filteredData.length === 0) {
      // Fallback to predefined keywords if no exact match
      filteredData = data;
    }

    // Apply pricing modifications
    filteredData = filteredData.map((dsc) => {
      let finalPrice = dsc.price;
      if (threeYearOption) finalPrice *= 1.45;
      if (!includeToken) finalPrice -= 310;

      return {
        type: dsc.type,
        price: `₹${finalPrice.toFixed(2)}`,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(filteredData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error. Please try again later." }),
    };
  }
};
