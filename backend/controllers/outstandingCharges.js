const { fetchOutstandingChargesOverview } = require('../db/outstandingChargesQueries');

async function getOutstandingCharges(req, res) {
    try {
        const result = await fetchOutstandingChargesOverview();
        res.json({
            success: true,
            data: result
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
};

module.exports = { getOutstandingCharges };