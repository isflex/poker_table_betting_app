import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import flattenChildren from "react-keyed-flatten-children"
import { getRoutePath } from './use-router';
import { getRouter } from './router';
// import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite';
// export const FlexBrowserRouter = (props: FlexBrowserRouterProps): React.ReactElement => {
export const FlexBrowserRouter = observer(({ children }) => {
    const FlexMobxRouter = getRouter();
    const { location } = FlexMobxRouter;
    // let _location: Location = window.location
    // console.log('window location : ', _location)
    // console.log('flexRouterStore location : ', toJS(location))
    // _location = {
    //   ..._location,
    //   ...toJS(location)
    // }
    // console.log('combined location : ', _location)
    // https://stackoverflow.com/questions/55464194/how-to-define-typescript-for-react-children-map
    // interface EnrichedChildren {
    //   children?: React.ReactNode,
    //   location: H.Location,
    //   path: string
    // }
    const fn = (child) => {
        let resultChild;
        if (child.type === Routes) {
            resultChild = React.cloneElement(child, { location: location });
        }
        else if (child.type === Route) {
            // eslint-disable-next-line no-debugger
            // debugger
            const route = getRoutePath(child.props.path);
            resultChild = React.cloneElement(child, { path: route });
        }
        else {
            resultChild = React.cloneElement(child);
        }
        return resultChild;
    };
    const recursiveMap = (children, fn) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
                return child;
            }
            if (child.props.children) {
                const props = {
                    children: recursiveMap(child.props.children, fn)
                };
                child = React.cloneElement(child, props);
            }
            // if (child.props.children) {
            //   child = React.cloneElement(child, {
            //     children: recursiveMap(flattenChildren(child.props.children), fn)
            //   });
            // }
            return fn(child);
        });
    };
    const resultChildren = recursiveMap(children, fn);
    return (React.createElement(BrowserRouter, null, resultChildren));
});
//# sourceMappingURL=flex-browser-router.js.map