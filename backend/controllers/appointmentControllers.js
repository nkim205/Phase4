const { fetchSymptomsOverview } = require('../db/appointmentQueries');

async function getSymptomsOverview(req, res) {
    try {
        const result = await fetchSymptomsOverview();
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

module.exports = { getSymptomsOverview };