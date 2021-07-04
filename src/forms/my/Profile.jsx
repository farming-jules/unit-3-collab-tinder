import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? ' is-invalid' : '')}`}
        name="firstName"
        type="firstName"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="firstName" />
    </div>

    <div className="form-group">
      <label htmlFor="dob">Date Of Birth</label>
      <Field
        id="dob"
        className={`form-control ${(errors.dob && touched.dob ? ' is-invalid' : '')}`}
        name="dob"
        type="dob"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="dob" />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
        name="email"
        type="email"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="email" />
    </div>

    <div className="form-group">
      <label htmlFor="gender">Gender</label>
      <Field
        id="gender"
        className={`form-control ${(errors.gender && touched.gender ? ' is-invalid' : '')}`}
        name="gender"
        type="gender"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="gender" />
    </div>

    <div className="form-group">
      <label htmlFor="sexualOrientation">Sexual Orientation</label>
      <Field
        id="sexualOrientation"
        className={`form-control ${(errors.sexualOrientation && touched.sexualOrientation ? ' is-invalid' : '')}`}
        name="sexualOrientation"
        type="sexualOrientation"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="sexualOrientation" />
    </div>

    <div className="form-group">
      <label htmlFor="passion">Passion</label>
      <Field
        id="passion"
        className={`form-control ${(errors.passion && touched.passion ? ' is-invalid' : '')}`}
        name="passion"
        type="passion"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="passion" />
    </div>

    <div className="form-group">
      <label htmlFor="lookingFor">Looking For</label>
      <Field
        id="lookingFor"
        className={`form-control ${(errors.lookingFor && touched.lookingFor ? ' is-invalid' : '')}`}
        name="lookingFor"
        type="lookingFor"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lookingFor" />
    </div>

    <div className="form-group">
      <label htmlFor="location">Location</label>
      <Field
        id="location"
        className={`form-control ${(errors.location && touched.location ? ' is-invalid' : '')}`}
        name="location"
        type="location"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="location" />
    </div>

    <div className="form-group">
      <label htmlFor="bio">Bio</label>
      <Field
        id="bio"
        className={`form-control ${(errors.bio && touched.bio ? ' is-invalid' : '')}`}
        name="bio"
        type="bio"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="bio" />
    </div>

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const loginSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  dob: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  gender: yup.string().required('Required'),
  sexualOrientation: yup.string().required('Required'),
  passion: yup.string().required('Required'),
  lookingFor: yup.string().required('Required'),
  location: yup.string().required('Required'),
  bio: yup.string().required('Required')
})

const FormsMyProfile = ({ onSubmit }) => (
  <Formik
    initialValues={{
      firstName: '',
      dob: '',
      email: '',
      gender: '',
      sexualOrientation: '',
      passion: '',
      lookingFor: '',
      location: '',
      bio: ''
    }}
    validationSchema={loginSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsMyProfile.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsMyProfile
