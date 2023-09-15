export default class JoinComponent extends React.Component<any, any, any> {
    static propTypes: {
        onSubmit: any;
        defaultValue: any;
    };
    constructor(props: any, context: any);
    state: {
        name: any;
        observer: boolean;
    };
    generateName: () => void;
    handleChange: (event: any) => void;
    handleSubmit: (event: any) => void;
    render(): React.JSX.Element;
}
import React from "react";
