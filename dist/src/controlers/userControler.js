"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const userService_1 = require("../services/userService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const userExists = yield (0, userService_1.findUserByUsername)(username);
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = yield (0, userService_1.createUser)(username, password);
        return res.status(201).json(user);
    }
    catch (error) {
        //@ts-ignore
        return res.status(500).json({ message: error.message });
    }
});
exports.registerUser = registerUser;
