// initial state
const state = {
    added: [],
    all: [
        {
        id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
        name: 'COBOL 101 vintage',
        description: 'Learn COBOL with this vintage programming book',
        price: 399
        },
        {
        id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
        name: 'Sharp C2719 curved TV',
        description: 'Watch TV like never before with the brand new curved screen technology',
        price: 1995
        },
        {
        id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
        name: 'Remmington X mechanical keyboard',
        description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
            'features tactile, clicky switches for speed and accuracy',
        price: 595
        }
    ]
}
// getters
const getters = {
    allProducts: state => state.all, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    cartProducts: state => {
        return state.added
    }
}
const mutations = {
    _addToCart (state, {product}) {
      state.added.push(product)
    },
    /*_clearCart (state) {
        state.added = []
    }*/
}

const actions = {
    addToCart ({ state, commit }, product) {
        commit('_addToCart', {product})
    },
    /*addToCart ({ state, commit }) {
        commit('_clearCart')
    }*/
}

export default {
    state,
    getters,
    mutations,
    actions
}
  