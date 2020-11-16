import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    };

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    };

    deleteItem(id) {
        // Find index number that satisfies if the el.id === (id)
        const index = this.items.findIndex(el => el.id === id);
        // Remove 1 element
        this.items.splice(index, 1); 
    };

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
};

