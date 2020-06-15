import * as React from 'react';

export interface IRndComponentProps {
}

export interface IRndComponentState {
    value: number;
    isLoaded: boolean;
}

export default class RndIntComponent extends React.Component<IRndComponentProps, IRndComponentState> {
    private interval: any = null;
    constructor(props: IRndComponentProps) {
        super(props);

        this.state = {
            isLoaded: false,
            value: 0
        }
        this.getData = this.getData.bind(this);
    }

    public componentDidMount() {
        this.interval = setInterval(this.getData, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
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

    private getData() {
        fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(x => x.text())
            .then((x) => {
                this.setState({
                    isLoaded: true, value: +x
                });
            });
    }
}
