var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {
      newItem: ''
    }
  },
  handleChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  handleSubmit: function(e){
      e.preventDefault();
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      });
  },
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" 
              className="form-control" 
              value={this.state.newItem} 
              placeholder="Add List Item" 
              onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddItem;