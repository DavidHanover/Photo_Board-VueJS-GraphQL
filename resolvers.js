module.exports = {
  Query: {
    getUser: () => null
  },
  Mutation: {
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("Error:User already exists.");
      } else {
        const newUser = await new User({
          username,
          email,
          password
        }).save();
        return newUser;
      }
    },
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    }
  }
};
