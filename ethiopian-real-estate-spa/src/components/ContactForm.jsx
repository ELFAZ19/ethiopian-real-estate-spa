import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 600px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 15px;
  background: white;
  padding: 0 5px;
  font-size: 0.9rem;
  color: var(--primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-light);
    box-shadow: 0 0 0 2px rgba(58, 90, 120, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
  font-size: 1rem;
  min-height: 150px;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-light);
    box-shadow: 0 0 0 2px rgba(58, 90, 120, 0.2);
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  align-self: flex-start;

  &:hover {
    background-color: var(--primary-light);
  }
`;

const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  padding-left: 1rem;
`;

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits"),
      message: Yup.string()
        .required("Required")
        .min(20, "Message should be at least 20 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputGroup>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          hasError={formik.touched.name && formik.errors.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorText>{formik.errors.name}</ErrorText>
        ) : null}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          hasError={formik.touched.email && formik.errors.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorText>{formik.errors.email}</ErrorText>
        ) : null}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          hasError={formik.touched.phone && formik.errors.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <ErrorText>{formik.errors.phone}</ErrorText>
        ) : null}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="message">Your Message</Label>
        <TextArea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          hasError={formik.touched.message && formik.errors.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorText>{formik.errors.message}</ErrorText>
        ) : null}
      </InputGroup>

      <Button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
