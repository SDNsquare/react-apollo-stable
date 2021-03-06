"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var ApolloContext_1 = require("./ApolloContext");
var ts_invariant_1 = require("ts-invariant");
var ApolloConsumer = function (props, legacyContext) {
    function finish(context) {
        if (!context || !context.client) {
            throw new ts_invariant_1.InvariantError('Could not find "client" in the context of ApolloConsumer. ' + 'Wrap the root component in an <ApolloProvider>.');
        }
        return props.children(context.client);
    }
    return ApolloContext_1.ApolloContext ? (React.createElement(ApolloContext_1.ApolloContext.Consumer, null, function () { return finish(legacyContext); })) : (finish(legacyContext));
};
ApolloConsumer.contextTypes = {
    client: PropTypes.object.isRequired
};
ApolloConsumer.propTypes = {
    children: PropTypes.func.isRequired
};
exports.default = ApolloConsumer;
//# sourceMappingURL=ApolloConsumer.js.map