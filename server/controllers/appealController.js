const AppealService = require("../services/appealService.js");

class AppealController {
    static create = async (req, res, next) => {
        try {
            const { name, phone, content } = req.body;
            let appeal = await AppealService.create({
                name,
                phone,
                content,
            });
            res.json({msg: "adsasd"});
        } catch (error) {
            next(error)
        }
    };
}

module.exports = AppealController;
