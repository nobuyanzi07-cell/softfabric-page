const ar = [20,5]
const arObj = {
    0: 20,
    1: 5,
    push: function (newItem) {
        const key = this.lenght;
        this[key] = newItem;
        this.lenght = this.lenght + 1;
    },
    length: 2,
}
console.table(ar);
console.table(arObj);
const node1 = {
    location: "Nairobi",
};
const node2 = {
    location: "Nakuru",
};
const node3 = {
    location: "Mombasa",
};

node1.nodeA = node2
node1.nodeB = node3

node2.nodeA = node1
node2.nodeB = node3

node3.nodeA = node1
node3.nodeB = node2