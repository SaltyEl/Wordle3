export class WordleRow {
    // Row constructor
    constructor(bList) {
        this.block1 = bList[0];
        this.block2 = bList[1];
        this.block3 = bList[2];
        this.block4 = bList[3];
        this.block5 = bList[4];
    }

    get blockList() {
        return [this.block1, this.block2, this.block3, this.block4, this.block5];
    }
}