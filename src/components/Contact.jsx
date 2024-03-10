import React from "react";
import Button from "@material-ui/core/Button";
import { useForm, ValidationError } from "@formspree/react";
import { Card, Toast } from "flowbite-react";
import Breadcrumb from "flowbite-react/lib/esm/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div>
        <Helmet>
              <title>Contact Us - Cup Poha</title>
        </Helmet>
      <form
  action="https://send.pageclip.co/sDXVHczZsefwuyklGQNhkV5wDzdU279y"
  className="pageclip-form"
  method="post"
>
  {/* Replace these inputs with your own. Make sure they have a "name" attribute! */}
  <input type="text" name="name" defaultValue="Roscoe Jones" />
  <input type="email" name="email" defaultValue="roscoe@example.com" />
  {/* This button will have a loading spinner. Keep the inner span for best results. */}
  <button type="submit" className="pageclip-form__submit">
    <span>Send</span>
  </button>
</form>

    </div>
  );
};

export default Contact;
