import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: '',
    info: '',
  };

  componentDidCatch(error, info) {
    this.props.onError();
    this.setState({ hasError: true, error, info });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <this.props.fallbackComponent
          error={this.state.error}
          resetErrorBoundary={this.props.onReset}
          isLoading={this.props.isLoading}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
