import React from 'react';
import $ from 'jquery';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: {}};
  }

  static get propTypes() {
    return {
      login: React.PropTypes.string.isRequired
    };
  }

  componentDidMount() {
    $.get(`https://api.github.com/users/${this.props.login}`, (data) => {
      this.setState({user: data});
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.user.avatar_url} width="80" />
        <h3>{this.state.user.name}</h3>
        <hr />
      </div>
    );
  }
}

export default Card;
