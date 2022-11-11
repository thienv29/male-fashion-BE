import Wishlist from '../models/base/Wishlist.js';
import mongoose from 'mongoose';

const WishlistService = {
    async getAll() {
        const wishlists = await Wishlist.find();
        return wishlists;
    }
    ,
    async getById(id) {
        const wishlist = await Wishlist.findOne({ _id: id });
        return wishlist;
    }
    ,
    async createWishlist(wishlist) {

        const wishlistSchema = new Wishlist({
            _id: new mongoose.Types.ObjectId(),
            ...wishlist,
        });

        const result = await wishlistSchema.save();
        return result;
    }
    ,
    async updateWishlist(wishlist) {
        const result = await Wishlist.findByIdAndUpdate(wishlist._id, wishlist);
        return result;
    }

    ,
    async deleteWishlist(wishlistId) {
        const result = await Wishlist.findByIdAndDelete(wishlistId);
        return result;
    },

    async deleteAllWishlist(wishlistIds) {
        console.log(wishlistIds);
        const result = await Wishlist.deleteMany({ _id: { $in: wishlistIds } });
        return result;
    },


};

export default WishlistService;
