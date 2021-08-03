import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Course</h1>
        <h2>Available Courses</h2>
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input className="btn btn-primary mt-2" type="submit" value="save" />

        {this.props.courses.map((c) => (
          <div key={c.title}>{c.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
