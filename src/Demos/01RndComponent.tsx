import * as React from 'react';

export interface IRndComponentProps {
}

export interface IRndComponentState {
    value: number;
    isLoaded: boolean;
}

export default class RndComponent extends React.Component<IRndComponentProps, IRndComponentState> {
    constructor(props: IRndComponentProps) {
        super(props);

        this.state = {
            isLoaded: false,
            value: 0
        }
    }

    public componentDidMount() {
        fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(x => x.text())
            .then((x) => {
                this.setState({
                    isLoaded: true, value: +x
                });
            });
    }

    public render() {

        const { isLoaded, value } = this.state;
        if (!isLoaded) {
            return (<div>Loading ...</div>);
        } 
        return (
            <div>
                {value}
            </div>
        );

    }
}
