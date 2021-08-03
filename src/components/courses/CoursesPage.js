import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./courseList";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((err) => {
        alert("Loading courses failed: ", err);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((err) => {
        alert("Loading authors failed: ", err);
      });
    }
  }
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((courses) => {
            return {
              ...courses,
              authorName: state.authors.find((a) => a.id === courses.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
