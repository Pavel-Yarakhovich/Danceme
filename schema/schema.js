const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = graphql;

const Requests = require("../models/request");
const Items = require("../models/item");
const Feedbacks = require("../models/feedback");

const RequestType = new GraphQLObjectType({
  name: "Request",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
    connectBy: { type: new GraphQLNonNull(GraphQLString) },
    served: { type: new GraphQLNonNull(GraphQLBoolean) },
  }),
});

const ItemType = new GraphQLObjectType({
  name: "Item",
  fields: () => ({
    id: { type: GraphQLID },
    image: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    hit: { type: GraphQLBoolean },
    kind: { type: GraphQLString },
  }),
});

const FeedbackType = new GraphQLObjectType({
  name: "Feedback",
  fields: () => ({
    id: { type: GraphQLID },
    image: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //UPDATE REQUESTS
    updateRequest: {
      type: RequestType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
        connectBy: { type: new GraphQLNonNull(GraphQLString) },
        served: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        return Requests.findByIdAndUpdate(
          args.id,
          { $set: { served: args.served } },
          { new: true }
        );
      },
    },
    //ADD REQUEST
    addRequest: {
      type: RequestType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
        connectBy: { type: new GraphQLNonNull(GraphQLString) },
        served: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        const request = new Requests({
          name: args.name,
          phone: args.phone,
          comment: args.comment,
          connectBy: args.connectBy,
          served: args.served,
        });
        return request.save();
      },
    },
    // ADD ITEM
    addItem: {
      type: ItemType,
      args: {
        id: { type: GraphQLID },
        image: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        size: { type: GraphQLString },
        manufacturer: { type: GraphQLString },
        hit: { type: GraphQLBoolean },
        kind: { type: GraphQLString },
      },
      resolve(parent, args) {
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
    },
    // UPDATE ITEM
    updateItem: {
      type: ItemType,
      args: {
        id: { type: GraphQLID },
        image: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        size: { type: GraphQLString },
        manufacturer: { type: GraphQLString },
        hit: { type: GraphQLBoolean },
        kind: { type: GraphQLString },
      },
      resolve(parent, args) {
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
    },
    // REMOVE ITEM
    removeItem: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Items.findByIdAndRemove(args.id);
      },
    },
    // ADD FEEDBACK
    addFeedback: {
      type: FeedbackType,
      args: {
        id: { type: GraphQLID },
        image: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        comment: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const feedback = new Feedbacks({
          id: args.id,
          image: args.image,
          name: args.name,
          comment: args.comment,
        });
        return feedback.save();
      },
    },
    // REMOVE FEEDBACK
    removeFeedback: {
      type: FeedbackType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Feedbacks.findByIdAndRemove(args.id);
      },
    },
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    requests: {
      type: new GraphQLList(RequestType),
      resolve(parent, args) {
        return Requests.find({});
      },
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return Items.find({});
      },
    },
    feedbacks: {
      type: new GraphQLList(FeedbackType),
      resolve(parent, args) {
        return Feedbacks.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
