import React, { useState } from 'react';
import PropTypes from 'prop-types';
export default function DebuggingComponent({ pendingActions, messages }) {
    const [showDebugging, setShowDebugging] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement("p", { className: 'mt-5' },
            React.createElement("button", { className: 'btn btn-light btn-sm', onClick: () => setShowDebugging(!showDebugging) },
                showDebugging ? 'Hide' : 'Show',
                " Debug Info")),
        showDebugging &&
            React.createElement(React.Fragment, null,
                React.createElement("h5", null, "Pending Actions:"),
                React.createElement("ul", { className: 'list-unstyled' }, pendingActions.map(it => (React.createElement("li", { key: it.seq }, JSON.stringify(it))))),
                React.createElement("h5", null, "Messages:"),
                React.createElement("ul", { className: 'list-unstyled' }, messages.map((it, index) => (React.createElement("li", { key: index }, it)))))));
}
DebuggingComponent.propTypes = {
    pendingActions: PropTypes.array,
    messages: PropTypes.array,
};
//# sourceMappingURL=DebuggingComponent.js.map