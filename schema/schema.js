const { gql } = require("apollo-server");

const Requests = require("../models/request");
const Items = require("../models/item");
const Feedbacks = require("../models/feedback");

const typeDefs = gql`

  type Request {
    id: ID
    name: String
    phone: String
    comment: String
    connectBy: String
    served: Boolean
  }

  type Item {
    id: ID
    image: String
    description: String
    size: String
    manufacturer: String
    hit: Boolean
    kind: String
  }

  type Feedback {
    id: ID
    image: String
    name: String
    comment: String
  }

  type Query {
    requests: [Request]
    items: [Item]
    feedbacks: [Feedback]
  }

  type Mutation {
    updateRequest(id: ID!, served: Boolean): Request
    addRequest(
      name: String
      phone: String
      comment: String
      connectBy: String
      served: Boolean
    ): Request
    addItem(
      image: String
      description: String
      size: String
      manufacturer: String
      hit: Boolean
      kind: String
    ): Item
    updateItem(
      image: String
      description: String
      size: String
      manufacturer: String
      hit: Boolean
      kind: String
    ): Item
    removeItem(id: ID!): Item
    addFeedback(image: String, name: String, comment: String): Feedback
    removeFeedback(id: ID!): Feedback
  }
`;

const resolvers = {
  Query: {
    requests: (parent, args, context, info) => Requests.find({}),
    items: (parent, args, context, info) => Items.find({}),
    feedbacks: (parent, args, context, info) => Feedbacks.find({}),
  },
  Mutation: {
    updateRequest: (parent, args) => {
      return Requests.findByIdAndUpdate(
        args.id,
        { $set: { served: args.served } },
        { new: true }
      );
    },
    addRequest: (parent, args) => {
      const request = new Requests({
        name: args.name,
        phone: args.phone,
        comment: args.comment,
        connectBy: args.connectBy,
        served: args.served,
      });
      return request.save();
    },
    addItem: (parent, args) => {
      const item = new Items({
        image: args.image,
        description: args.description,
        size: args.size,
        manufacturer: args.manufacturer,
        hit: args.hit,
        kind: args.kind,
      });
      return item.save();
    },
    updateItem: (parent, args) => {
      return Items.findByIdAndUpdate(
        args.id,
        {
          $set: {
            image: args.image,
            description: args.description,
            size: args.size,
            manufacturer: args.manufacturer,
            hit: args.hit,
            kind: args.kind,
          },
        },
        { new: true }
      );
    },
    removeItem: (parent, args) => {
      return Items.findByIdAndRemove(args.id);
    },
    addFeedback: (parent, args) => {
      const feedback = new Feedbacks({
        id: args.id,
        image: args.image,
        name: args.name,
        comment: args.comment,
      });
      return feedback.save();
    },
    removeFeedback: (parent, args) => {
      return Feedbacks.findByIdAndRemove(args.id);
    },
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
