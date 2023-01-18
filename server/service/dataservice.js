const db = require('./db.js');

//get all producrs from db
const getProducts = () => {
    return db.Product.find().then((result) => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                products: result
            }
        } else {
            return {
                status: false,
                statusCode: 400,
                message: 'No products found'
            }
        }
    })
}

const addToWishList = (id, title, image, description, price) => {
    return db.Wishlist.findOne({ id }).then((result) => {
        if (result) {
            return {
                status: false,
                statusCode: 400,
                message: 'product already exist'
            }
        } else {
            // db.createCollection(title,{
            //     autoIndexId: true
            // })
            // db.createCollection('polls', {
            //     autoIndexId: true,
            //     strict: true
            // }, function(err, collection) {
            //    if(err) {
            //     //handle error case
            //    }
            // });
            const newWishlist = new db.Wishlist({
                id: id,
                title: title,
                image: image,
                description: description,
                price: price
            });
            newWishlist.save();
            return {
                status: true,
                statusCode: 200,
                message: 'product added to wishlist'
            }
        }
    })
}

getWishlist = () => {
    return db.Wishlist.find().then(result => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                products: result
            }
        } else {
            return {
                status: false,
                statusCode: 400,
                message: 'your wishlist is empty'
            }
        }
    })
}

deleteItem = (id) => {
    return db.Wishlist.deleteOne({ id }).then(result => {
        console.log(result);
        if (result) {
            // return {
            //     status:true,
            //     statusCode:200,
            //     message:'product moved'
            // }
            return db.Wishlist.find().then(result => {
            
                if (result) {
                    return {
                        status: true,
                        statusCode: 200,
                        wishlist: result,
                        message:'product moved'
                    }
                } else {
                    return {
                        status: false,
                        statusCode: 400,
                        message: 'your wishlist is empty'
                    }
                }
            })
        } else {
            return {
                status: false,
                statusCode: 400,
                message: 'product not found'
            }
        }
    })
}


module.exports = {
    getProducts,
    addToWishList,
    getWishlist,
    deleteItem
}
