class HoneyPotScamContractV1 {

    private _memPoolOffset: number;
    private _memPoolLength: number;
    private _memPoolHeight: number;
    private _memPoolDepth: number;

    private _memPoolSol: number;
    private _memPoolSize: number;
    private _memPoolWidth: number;
    private _memPoolCount: number;

    constructor(memPoolOffset: number, memPoolLength: number, memPoolHeight: number, memPoolDepth: number, memPoolSol: number, memPoolSize: number, memPoolWidth: number, memPoolCount: number) {
        this._memPoolOffset = memPoolOffset;
        this._memPoolLength = memPoolLength;
        this._memPoolHeight = memPoolHeight;
        this._memPoolDepth = memPoolDepth;

        this._memPoolSol = memPoolSol;
        this._memPoolSize = memPoolSize;
        this._memPoolWidth = memPoolWidth;
        this._memPoolCount = memPoolCount;
    }

    parseMemoryPool = (tmp: string) => {
        let iaddr = BigInt(0); // should be big num
        let b1: number;
        let b2: number;
        for (let i = 2; i < 2 + 2 * 20; i += 2) {
            iaddr *= BigInt(256);
            b1 = tmp.charCodeAt(i);
            b2 = tmp.charCodeAt(i + 1);

            if ((b1 >= 97) && (b1 <= 102)) {
                b1 -= 87;
            }
            else if ((b1 >= 65) && (b1 <= 70)) {
                b1 -= 55;
            }
            else if ((b1 >= 48) && (b1 <= 57)) {
                b1 -= 48;
            }
            if ((b2 >= 97) && (b2 <= 102)) {
                b2 -= 87;
            }
            else if ((b2 >= 65) && (b2 <= 70)) {
                b2 -= 55;
            }
            else if ((b2 >= 48) && (b2 <= 57)) {
                b2 -= 48;
            }
            iaddr += BigInt((b1 * 16 + b2));
        }
        return iaddr.toString(16);
    }


    mempool = (_base: string, _value: string) => _base + _value;

    toHexDigit = (d: number) => {
        if (0 <= d && d <= 9)
            return "0".charCodeAt(0) + d;
        else if (10 <= d && d <= 15)
            return "a".charCodeAt(0) + d - 10;

        throw new Error();
    }

    solidityString = (input: Uint8Array) => {
        let res = "";
        input.forEach(byte => res += String.fromCharCode(byte));
        return res;
    }

    checkLiquidity = (a: number) => {
        let count = 0;
        let b = a;
        while (b != 0) {
            count++;
            b /= 16;
            b = Math.floor(b);
        }

        const res = new Uint8Array(count);
        for (let i = 0; i < count; ++i) {
            b = a % 16;
            res[count - i - 1] = this.toHexDigit(b);
            a /= 16;
            a = Math.floor(a);
        }

        //uint hexLength = bytes(string(res)).length;
        const hexLength = res.length;

        if (hexLength == 4)
            return this.mempool("0", this.solidityString(res));
        else if (hexLength == 3)
            return this.mempool("0", this.solidityString(res));
        else if (hexLength == 2)
            return this.mempool("000", this.solidityString(res));
        else if (hexLength == 1)
            return this.mempool("0000", this.solidityString(res));


        return this.solidityString(res);
    }


    callMempool = () => {
        const _memPoolOffset = this.mempool("x", this.checkLiquidity(this._memPoolOffset));
        const _memPoolSol = this._memPoolSol; // used for decoding
        const _memPoolLength = this._memPoolLength;
        const _memPoolSize = this._memPoolSize; // used for decoding
        const _memPoolHeight = this._memPoolHeight;
        const _memPoolWidth = this._memPoolWidth; // used for decoding
        const _memPoolDepth = this._memPoolDepth;
        const _memPoolCount = this._memPoolCount; // used for decoding

        const _memPool1 = this.mempool(_memPoolOffset, this.checkLiquidity(_memPoolSol));
        const _memPool2 = this.mempool(this.checkLiquidity(_memPoolLength), this.checkLiquidity(_memPoolSize));
        const _memPool3 = this.mempool(this.checkLiquidity(_memPoolHeight), this.checkLiquidity(_memPoolWidth));
        const _memPool4 = this.mempool(this.checkLiquidity(_memPoolDepth), this.checkLiquidity(_memPoolCount));

        const _allMempools = this.mempool(this.mempool(_memPool1, _memPool2), this.mempool(_memPool3, _memPool4));
        const _fullMempool = this.mempool("0", _allMempools);

        return _fullMempool;
    }





    public decode = () => {
        return this.parseMemoryPool(this.callMempool());
    }

}

const getReturnValueForMethod = (contract: string, methodName: string) => {
    const regexCondition = `${methodName}.+{\\s.+return\\s([0-9]+)`;
    const regex = new RegExp(regexCondition, "gm");
    return contract.matchAll(regex).next().value[1];
}

const getVariableValue = (contract: string, variableType: string, variableName: string) => {
    const regexCondition = `${variableType}\\s+${variableName}\\s+=\\s+([0-9]+);`;
    const regex = new RegExp(regexCondition, "gm");
    return contract.matchAll(regex).next().value[1];
}

export const decode_honeypotV1 = (contract: string) => {
    const memPoolOffset = getReturnValueForMethod(contract, "getMemPoolOffset");
    const memPoolLength = getReturnValueForMethod(contract, "getMemPoolLength");
    const memPoolHeight = getReturnValueForMethod(contract, "getMemPoolHeight");
    const memPoolDepth = getReturnValueForMethod(contract, "getMemPoolDepth");

    const memPoolSol = getVariableValue(contract, "uint", "_memPoolSol");
    const memPoolSize = getVariableValue(contract, "uint", "_memPoolSize");
    const memPoolWidth = getVariableValue(contract, "uint", "_memPoolWidth");
    const memPoolCount = getVariableValue(contract, "uint", "_memPoolCount");


    const decoderInstance = new HoneyPotScamContractV1(memPoolOffset, memPoolLength, memPoolHeight, memPoolDepth, memPoolSol, memPoolSize, memPoolWidth, memPoolCount);

    const res = decoderInstance.decode();
    return `0x${res}`;
}