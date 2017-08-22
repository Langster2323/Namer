

class AddNameForm extends React.Component {
  render () {
    return (
      <form>
        <input type="text" value={this.props.name} />
        <input type="submit" value="Add Name" />
      </form>
    )
  };
}
