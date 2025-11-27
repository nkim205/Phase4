const { fetch } = require('../db/departmentQueries');

async function get(req, res) {
    try {
        const result = await fetchDepartmentOverview();
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

module.exports = { getDepartmentOverview };