const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveRecipe: async (parent, { newRecipe }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { SavedRecipes: newRecipe }},
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in');
    },
    removeRecipe: async (parent, { recipeId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { SavedRecipes: { recipeId }}},
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in');
    },
  },
};

module.exports = resolvers;
