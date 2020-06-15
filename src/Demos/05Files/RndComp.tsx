import * as React from 'react';

export interface IRndCompProps {
    minvalue: number;
    maxvalue: number;
    timeout: number;
    valuechanged?: (value: number) => void;
}

export interface IRndCompState {
    value: number;
    isLoaded: boolean;
}

export default class RndComp extends React.Component<IRndCompProps, IRndCompState> {
    private interval: any = null;
    constructor(props: IRndCompProps) {
        super(props);

        this.state = {
            value: 0,
            isLoaded: false
        }
        this.getData = this.getData.bind(this);
    }
    public componentDidMount() {
        this.interval = setInterval(this.getData, this.props.timeout);
    }

    public componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    public render() {
        return (
            <div>

            </div>
        );
    }
    public componentDidUpdate(prevProps: IRndCompProps, prevState: IRndCompState) {
        if (prevProps.timeout !== this.props.timeout) {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.interval = setInterval(this.getData, this.props.timeout);
        }
    }

    private getData() {
        debugger;
        const { minvalue, maxvalue } = this.props;
        fetch(`https://www.random.org/integers/?num=1&min=${minvalue}&max=${maxvalue}&col=1&base=10&format=plain&rnd=new`)
            .then(x => x.text())
            .then((x) => {
                this.setState({
                    isLoaded: true, value: +x
                }, this.sendData);
            });
    }

    private sendData() {
        if (this.props.valuechanged) {
            this.props.valuechanged(this.state.value);
        }
    }
}
