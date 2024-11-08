/**
 * 
 * @On(event = { "CREATE" }, entity = "buidciSrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Redemptions, Customers } = cds.entities;
    const { customer, redeemedAmount } = request.data;

    if (!customer || !redeemedAmount) {
        return request.error(400, 'Customer and redeemed amount must be provided.');
    }

    // Fetch the related customer
    const customerRecord = await SELECT.one.from(Customers).where({ ID: customer });

    if (!customerRecord) {
        return request.error(404, 'Customer not found.');
    }

    // Update the customer's reward points
    const updatedTotalRewardPoints = customerRecord.totalRewardPoints - redeemedAmount;
    const updatedTotalRedeemedRewardPoints = customerRecord.totalRedeemedRewardPoints + redeemedAmount;

    if (updatedTotalRewardPoints < 0) {
        return request.error(400, 'Insufficient reward points.');
    }

    await UPDATE(Customers)
        .set({
            totalRewardPoints: updatedTotalRewardPoints,
            totalRedeemedRewardPoints: updatedTotalRedeemedRewardPoints
        })
        .where({ ID: customer });
};