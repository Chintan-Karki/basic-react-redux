import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((err) => {
        alert("Loading courses failed: ", err);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((err) => {
        alert("Loading authors failed: ", err);
      });
    }
  }, []);

  return (
    <>
      <h1>Manage Course</h1>
    </>
  );
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
