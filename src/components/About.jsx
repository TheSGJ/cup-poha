import { Accordion } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <div className="container">
      <Helmet>
        <title>About - Cup Poha</title>
      </Helmet>
      <div className="container my-3">
        <h2 className="text-xl text-center font-bold my-4">About - Cup Poha</h2>
        <p>
          Instant Cup Poha is designed to cater to the busy lives of individuals who
          crave a tasty meal but lack the time to prepare one. With this innovative
          product, you can enjoy the rich flavors of poha without the hassle of
          cooking it from scratch.
        </p>
        <h3>The Preparation</h3>
        <p>
          Preparing Instant Cup Poha is as simple as it gets. Just add hot water to
          the cup, stir, and wait for 3 minutes. In no time, you'll have a steaming
          hot serving of poha ready to delight your taste buds.
        </p>
        <h2>The Success of Instant Cup Poha</h2>
        <p>
          Instant Cup Poha has already garnered a lot of attention and praise. It has
          become a favorite among students, working professionals, and anyone looking
          for a quick and satisfying meal option. The convenience it offers without
          compromising on taste has made it a hit.
        </p>
        <h3>The Role of Marketing</h3>
        <p>
          Arvind Kumar, the Marketing Salesman, has played a pivotal role in promoting
          Instant Cup Poha. His efforts have led to increased awareness and demand for
          the product.
        </p>
        <h3>The Future</h3>
        <p>
          The Business Blasters have big plans for the future. They aim to expand
          their reach and introduce more flavors and variations of Instant Cup Poha to
          cater to diverse tastes.
        </p>
        <h2>Conclusion</h2>
        <p>
          In a world driven by innovation and convenience, the Business Blasters from
          Rajkiya Sarvodaya Bal Vidyalaya have introduced an exciting concept -
          Instant Cup Poha. This quick, delicious meal option is a testament to the
          creativity and entrepreneurial spirit of these young individuals. With the
          dedication of Yogesh Prajapati, Shri Ganesh Jha, Arvind Kumar, Love Sharma,
          Yash Kumar, and Mukesh Bhandari, Instant Cup Poha is poised for a bright
          future.
        </p>

      </div>
      <h2 className="text-xl font-bold text-center my-4">FAQs:</h2>
      <Accordion flush={true}>
        <Accordion.Panel>
          <Accordion.Title>How did the idea for Instant Cup Poha originate?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The
              idea was born out of the students' desire to create a quick, easy, and
              delicious meal option, inspired by the convenience of cup noodles.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Who are the key individuals behind the Instant Cup Poha project?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The project is led by Yogesh Prajapati, with Shri Ganesh Jha, Arvind
              Kumar, Love Sharma, Yash Kumar, and Mukesh Bhandari each playing unique
              and essential roles.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the future plans for the Business Blasters and Instant Cup
            Poha?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The team aims to expand their product line, introduce new flavors, and
              reach a broader audience with their innovative meal concept.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Ingredients
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Rice Flakes (70%), Edible Vegetable Fat, Peanuts, Dehydrated Onion Flakes, Salt, Sugar, Green Chilli, Curry Leaves, Lemon Powder And Spice Mix.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Quality Testing
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Quality testing of Cup Poha, a brand known for its delicious and convenient instant poha, involves assessing various aspects such as taste, texture, aroma, appearance, and safety. Cup Poha is a trusted choice for those seeking a quick and flavorful meal, and it proudly boasts "No Added Preservatives."
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
