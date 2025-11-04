//async .. await
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Yay, I resolved!');
        }, 1000);
    });
};
function noAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        let value = myPromise();
        console.log(value);
    });
}
function yesAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        let value = yield myPromise();
        console.log(value);
    });
}
noAwait();
yesAwait();
export {};
//# sourceMappingURL=script.js.map