import * as React from 'react';
import Dialog, { DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';

export interface ISampleDialogProps {
    index: string|number;
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    children?: ((func?:any) => JSX.Element | JSX.Element[] );
        /*| (string & ((x: number | string) => JSX.Element | JSX.Element[]))
        | (number & ((x: number | string) => JSX.Element | JSX.Element[]))
        | (false & ((x: number | string) => JSX.Element | JSX.Element[]))
        | (true & ((x: number | string) => JSX.Element | JSX.Element[]));
        */
}

export interface ISampleDialogState {
    open: boolean;
    callback?: (value: number | string) => void;
}

export default class SampleDialog extends React.Component<ISampleDialogProps, ISampleDialogState> {
    constructor(props: ISampleDialogProps) {
        super(props);

        this.state = {
            open: false,
            callback: undefined
        };
    }
    public show:((func:any) => void) = callback => (event: { preventDefault: () => void; target: { value: any; }; }) => {
        event.preventDefault();

        event = {
            ...event,
            target: { ...event.target, value: event.target.value }
        };

        this.setState({
            open: true,
            callback: () => callback(event)
        });
    }
    public hide = () => this.setState({ open: false, callback: undefined });
    public confirm = () => {
        if (this.state.callback) {
            this.state.callback(this.props.index);
        }

        this.hide();
    }
    public isObject(val: {}): boolean {
        return (typeof val === 'object');
      }

    public render(): React.ReactElement<ISampleDialogProps> {
        return (
          <div key={'ConfirmDialogContainer' + this.props.index}>
            {this.props.children ? this.props.children(this.show):'<div></div>'}
            {this.state.open && (
              <Dialog
                key={'ConfirmDialogDlg' + this.props.index}
                hidden={false}
                onDismiss={this.hide}
                dialogContentProps={{
                  type: DialogType.normal,
                  title: this.props.title,
                  subText: this.props.message,
                }} >
                <DialogFooter key={'ConfirmDialogDlgFooter' + this.props.index}>
                  <PrimaryButton
                    key={'ConfirmDialogConfirmBtn' + this.props.index}
                    onClick={this.confirm} text={this.props.confirmLabel} />
                  <DefaultButton
                    key={'ConfirmDialogCancelBtn' + this.props.index}
                    onClick={this.hide}
                    text={this.props.cancelLabel} />
                </DialogFooter>
              </Dialog>
            )}
          </div>
        );
      }
}
