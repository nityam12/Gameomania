const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema(
  {
    //the user who sent the request
    from_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    //the user who accepted this request ,the naming is just to understand,otherwiase,the users won't see a difference
    to_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Friendship = mongoose.model('Friendship', friendshipSchema);

module.exports = Friendship;
