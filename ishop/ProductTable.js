var ProductTable = React.createClass({

    displayName: 'ProductTable',

    propTypes: {
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.string.isRequired,
                photo: React.PropTypes.string.isRequired,
                qty: React.PropTypes.number.isRequired,
                color: React.PropTypes.string,
            })
        ).isRequired,
    },

    render: function () {
        const products = this.props.products;

        const ids = products.map(function (item) {
            return item.id;
        });

        return React.DOM.table({className: 'product-table'},
            React.createElement(ProductTableHeader, {titles: Object.keys(products[0]), keys: ids}),
            React.createElement(ProductTableBody, {rows: products, keys: ids})
        );
    },
});

var ProductTableHeader = React.createClass({

    displayName: 'ProductTableHeader',

    render: function () {
        const keys = this.props.keys;
        const headerRow = React.DOM.tr({className: 'product-table__row'},
            this.props.titles.map(function (title, index) {
                return React.DOM.td({className: 'product-table__column', key: keys[index]}, title)
            })
        );

        return React.DOM.thead({className: 'product-table__header'}, headerRow);
    }
});

var ProductTableBody = React.createClass({

    displayName: 'ProductTableBody',

    render: function () {
        const keys = this.props.keys;
        let photoKeyIndex;
        const rows = this.props.rows.map(function (item, index) {
            const productValues = Object.keys(item).map(function (key, index) {
                if (key === 'photo') {
                    photoKeyIndex = index;
                }
                return item[key];
            });

            return React.DOM.tr({className: 'product-table__row', key: keys[index]},
                productValues.map(function (value, valueIndex) {
                    const inner = photoKeyIndex === valueIndex ?
                        React.DOM.img({className: 'product-table__img', src: value}) : value;
                    return React.DOM.td({className: 'product-table__column', key: valueIndex}, inner);
                })
            );
        });

        return React.DOM.tbody({className: 'product-table__body'}, rows);
    }
});