import * as React from 'react';
import RndAllComponent from './04RndAllComponent';

export interface IWrapperProps {
}

export interface IWrapperState {
    current?: number;
}

export default class Wrapper extends React.Component<IWrapperProps, IWrapperState> {
    constructor(props: IWrapperProps) {
        super(props);

        this.state = {
        }
        this.updatecurrent = this.updatecurrent.bind(this);
    }

    public render() {
        return (
            <div>
                <RndAllComponent timeoutms={1000} valuechanged={this.updatecurrent} />
                {this.state.current&&(<div><b>{this.state.current}</b></div>)}
            </div>
        );
    }

    private updatecurrent(x:number) {
        this.setState({current:x});
        
    }
}
