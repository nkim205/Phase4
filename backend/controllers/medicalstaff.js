const { fetch } = require('../db/medicalQueries');

async function get(req, res) {
    try {
        const result = await fetchMedicalStaffOverview();
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

module.exports = { getMedicalStaff };