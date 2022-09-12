var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as cardMethods from "../repositories/cardRepository";
import { checkError } from "../middlewares/errorHandler";
import { encrypt, decrypt } from "../utils/credentialUtils";
export function createCard(card) {
    return __awaiter(this, void 0, void 0, function () {
        var checkCard;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardMethods.findByTitle(card.title, card.userId)];
                case 1:
                    checkCard = _a.sent();
                    if (checkCard)
                        throw checkError(401, "You already registered a card with this title!");
                    card.password = encrypt(card.password);
                    card.securityCode = encrypt(card.securityCode);
                    return [4 /*yield*/, cardMethods.insert(card)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function getCards(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var cards;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardMethods.getMyCards(userId)];
                case 1:
                    cards = _a.sent();
                    cards.forEach(function (card) {
                        card.password = decrypt(card.password);
                        card.securityCode = decrypt(card.securityCode);
                    });
                    return [2 /*return*/, cards];
            }
        });
    });
}
export function getCardById(userId, id) {
    return __awaiter(this, void 0, void 0, function () {
        var card;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardMethods.getMyCardById(id)];
                case 1:
                    card = _a.sent();
                    if (!card)
                        throw checkError(404, "There's no card registered with this ID");
                    if (card.userId !== userId)
                        throw checkError(401, "This card doesn't belong to you!");
                    card.password = decrypt(card.password);
                    card.securityCode = decrypt(card.securityCode);
                    return [2 /*return*/, card];
            }
        });
    });
}
export function deleteCardById(userId, id) {
    return __awaiter(this, void 0, void 0, function () {
        var card;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardMethods.getMyCardById(id)];
                case 1:
                    card = _a.sent();
                    if (!card)
                        throw checkError(404, "There's no card registered with this ID");
                    if (card.userId !== userId)
                        throw checkError(401, "This card doesn't belong to you!");
                    return [4 /*yield*/, cardMethods.deleteCardById(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}