import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "./Button";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Only digits allowed")
    .required("Phone number is required"),
  country: yup.string().required("Please select a country"),
  date: yup.string().required("Date is required")
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    phone: "",
    country: "",
    date: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <main id="contactForm" className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-y-10 w-full">
            {/* Name */}
            <div className="w-full">
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-medium ${
                  errors.name && touched.name ? "text-red-500" : "text-white"
                }`}
              >
                Your Name
              </label>
              <Field
                name="name"
                type="text"
                className={`bg-gray-800 text-sm rounded-lg block w-full p-2.5 text-gray-300 placeholder:text-gray-500 focus:outline-none ${
                  errors.name && touched.name
                    ? "ring-1 ring-red-500"
                    : "focus:ring-0"
                }`}
                placeholder="Enter your full name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone */}
            <div className="w-full">
              <label
                htmlFor="phone"
                className={`block mb-2 text-sm font-medium ${
                  errors.phone && touched.phone ? "text-red-500" : "text-white"
                }`}
              >
                Phone Number
              </label>
              <Field
                name="phone"
                type="text"
                className={`bg-gray-800 text-sm rounded-lg block w-full p-2.5 text-gray-300 placeholder:text-gray-500 focus:outline-none ${
                  errors.phone && touched.phone
                    ? "ring-1 ring-red-500"
                    : "focus:ring-0"
                }`}
                placeholder="Enter your phone number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Country & Date */}
            <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-5">
              {/* Country */}
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="country"
                  className={`block mb-2 text-sm font-medium ${
                    errors.country && touched.country
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  Select a country
                </label>
                <Field
                  as="select"
                  name="country"
                  className={`bg-gray-800 text-sm rounded-lg block w-full p-2.5 text-gray-300 focus:outline-none ${
                    errors.country && touched.country
                      ? "ring-1 ring-red-500"
                      : "focus:ring-0"
                  }`}
                >
                  <option value="">Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Date */}
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="date"
                  className={`block mb-2 text-sm font-medium ${
                    errors.date && touched.date ? "text-red-500" : "text-white"
                  }`}
                >
                  Preferred Date
                </label>
                <Field
                  name="date"
                  type="date"
                  className={`bg-gray-800 text-sm rounded-lg block w-full p-2.5 text-gray-300 focus:outline-none ${
                    errors.date && touched.date
                      ? "ring-1 ring-red-500"
                      : "focus:ring-0"
                  }`}
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full">
              <label
                htmlFor="message"
                className={`block mb-2 text-sm font-medium ${
                  errors.message && touched.message
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                Your Message
              </label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className={`bg-gray-800 text-sm rounded-lg block w-full p-2.5 text-gray-300 placeholder:text-gray-500 focus:outline-none ${
                  errors.message && touched.message
                    ? "ring-1 ring-red-500"
                    : "focus:ring-0"
                }`}
                placeholder="Write your thoughts here..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button text="Submit" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ContactForm;
