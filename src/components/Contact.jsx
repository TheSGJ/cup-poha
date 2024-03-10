import React from "react";
import Button from "@material-ui/core/Button";
import { useForm, ValidationError } from "@formspree/react";
import { Card, Toast } from "flowbite-react";
import Breadcrumb from "flowbite-react/lib/esm/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvolykjd");
  if (state.succeeded) {
    return (
      <div className="grid place-items-center">
        <Helmet>
              <title>Message was sent successfully! | Contact - Cup Poha</title>
        </Helmet>
        <Toast className="my-6 mx-1">
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            ✉️
          </div>
          <div className="ml-3 text-sm font-normal">
            Message was sent successfully
          </div>
          <Toast.Toggle />
        </Toast>

        <Card className="my-2 py-18">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Message was successfully sent! 📧
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Thanks for your feedback, we'll get in touch with you soon.
          </p>
        </Card>
      </div>
    );
  }
  return (
    <div>
        <Helmet>
              <title>Contact Us - Cup Poha</title>
        </Helmet>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="my-3 grid place-items-center"
      >
        <Breadcrumb.Item>
        <Link to="/">Home</Link>
        </Breadcrumb.Item>
        
        <Breadcrumb.Item>
        <Link to="/contact">Contact</Link>
        </Breadcrumb.Item>
        
      </Breadcrumb>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center mx-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              Feedback
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto pageclip-form" action="https://send.pageclip.co/sDXVHczZsefwuyklGQNhkV5wDzdU279y"
  method="post">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 z-10 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <Button
                  className="pageclip-form__submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-indigo-500">
                  Business Email: sgj8434@outlook.com
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
