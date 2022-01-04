"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
// Initial Controller used to redirect to the correct API URI
class IndexController {
    index(req, res) {
        res.json({ text: 'API is in /api/tanks' });
    }
}
exports.indexController = new IndexController();
