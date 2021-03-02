import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(info);
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Not Student</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
