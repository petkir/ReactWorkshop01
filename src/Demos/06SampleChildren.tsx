import * as React from 'react';

export interface ISampleChildrenProps {
    children: any;
}

export interface ISampleChildrenState {
}

export default class SampleChildren extends React.Component<ISampleChildrenProps, ISampleChildrenState> {
    constructor(props: ISampleChildrenProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        const rep: number[]= [1,2,3];
        return (
            <div>
                <p>My Section with children</p>
                <div>
                    {this.props.children}
                </div>
                {rep.map((x)=> (<div key={x}>sample {x}</div>))}
            </div>
        );
    }
}
