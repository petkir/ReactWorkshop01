import * as React from 'react';
//import styles as './mystyles.module.scss';
import styles from './FluentUI.module.scss'
import RndComp from './05Files/RndComp';

import { PrimaryButton } from 'office-ui-fabric-react';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

export interface IFluentSampleProps {
}

export interface IFluentSampleState {
    current?: number;
    minvalue: number;
    maxvalue: number;
    timeout: number;
    showPanel: boolean;
}

export default class FluentSample extends React.Component<IFluentSampleProps, IFluentSampleState> {

    constructor(props: IFluentSampleProps) {
        super(props);

        this.state = {
            
            showPanel: false,
            minvalue: 1,
            maxvalue: 10,
            timeout: 800
        }
        this.updatecurrent = this.updatecurrent.bind(this);
    }
    
    public render() {
        const {  showPanel } = this.state;
        return (
            <div className={styles.flwrapper}>
              
                    <RndComp {...this.state} valuechanged={this.updatecurrent} />
              
                <PrimaryButton text="Primary" onClick={this.togglePanel.bind(this)} />
                {this.state.current && (<div><b>{this.state.current}</b></div>)}
                <Panel
                    headerText="ConfigurationPanel"
                    isOpen={showPanel}
                    onDismiss={this.closePanel.bind(this)}
                    // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                    closeButtonAriaLabel="Close"
                >
                    <Stack>
                        <Slider label="min" min={1} max={10} value={this.state.minvalue} showValue onChange={this.sliderOnChangemin.bind(this)} />
                        <Slider label="max" min={1} max={10} value={this.state.maxvalue} showValue onChange={this.sliderOnChangemax.bind(this)} />
                        <Slider label="Timeout" min={100} max={5000} step={100} defaultValue={800} showValue snapToStep onChange={this.sliderOnChangetimeout.bind(this)} />

                    </Stack>
                </Panel>

            </div>
        );
    }

    private togglePanel() {
        this.setState({ showPanel: !this.state.showPanel })
    }

    private closePanel() {
        this.setState({ showPanel: false })
    }

    private updatecurrent(x: number) {
        this.setState({ current: x });
    }

    private sliderOnChangemin(value: number) {
        if (this.state.maxvalue > value) {
            this.setState({ minvalue: value });
        }

    }
    private sliderOnChangemax(value: number) {
        if (this.state.minvalue < value) {
            this.setState({ maxvalue: value });
        }
    }


    private sliderOnChangetimeout(value: number) {
        this.setState({ timeout: value });
    }
}
