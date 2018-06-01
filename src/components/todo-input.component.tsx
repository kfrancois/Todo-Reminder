import React from 'react';
import './todo-input.component.less';

interface ITodoInputComponentProps {
  onSubmit: (text: string) => void;
}

const initialState = { text: '' };

export default class TodoInputComponent extends React.Component<
  ITodoInputComponentProps
  > {
  public state = initialState;

  public render() {
    return (
      <input
        className="add-todo--input"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }

  private handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  }

  private handleChange = (event: any) => {
    this.setState({ text: event.target.value });
  }

  private onSubmit = () => {
    this.props.onSubmit(this.state.text);
    this.clearInput();
  }

  private clearInput = () => this.setState(initialState);
}
