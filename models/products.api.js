class ProductAPI {
    constructor() {
        this.products = [];
    }
    getById = id => {
        const foundProduct = this.products.find(p => p.id == id);
        if (!foundProduct) return {error: 'Producto no encontrado'}
        return foundProduct;
    }
    getAll = () => {
        return this.products;
    }
    saveProduct = product => {
        let newId;
        if (this.products.length <= 0) newId = 1;
        else newId = this.products[this.products.length - 1].id + 1;
        this.products.push({ id: newId, ...product });
        return {id: newId, ...product};
    }
    updateProduct = (newProduct, id) => {
        const indexProduct = this.products.findIndex(p => p.id == id);
        if (!this.products[indexProduct]) return { error: 'Producto inexistente' };
        this.products[indexProduct] = { id, ...newProduct };
        return this.products[indexProduct];
    }
    deleteProduct = id => {
        const indexProduct = this.products.findIndex(p => p.id == id);
        if (!this.products[indexProduct]) return { error: 'Producto inexistente' };
        return this.products.splice(indexProduct, 1);
    }
    deleteAll = () => {
        this.products = [];
    }
}

module.exports = ProductAPI;