import { Carousel } from "flowbite-react";
import React from "react";
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Home - Cup Poha</title>
      </Helmet>
      <div className="my-4 container-lg">
        <div>
          <h2 className>
            <span style={{ fontSize: "2rem" }}>
              Cup Poha
              Innovation
            </span>
          </h2>
          <hr />
          <h2 className>
            <span style={{ fontSize: "2rem" }}>
              <br />
            </span>
          </h2>
          <p>
            In a world where convenience and innovation go hand in hand, a group of
            talented young minds from Rajkiya Sarvodaya Bal Vidyalaya in Patparganj has
            created a remarkable product: Instant Cup Poha. This unique concept,
            inspired by the quick and easy appeal of cup noodles, offers a delicious
            poha dish that's ready in just 3 minutes. The brainchild of six students
            known as the Business Blasters, this project showcases the remarkable roles
            they played in bringing this innovative concept to life.
          </p>
          <h3>The Business Blasters</h3>
          <p>
            The Business Blasters, a group of young innovators, consists of six
            passionate individuals who have each taken on distinct roles to make this
            project a reality.
          </p>
          <h4 className="text-2xl my-2 font-bold">Group Leader and Organizer: Yogesh Prajapati</h4>
          <p>
            Yogesh Prajapati leads the team, ensuring everything runs smoothly. As the
            organizer, he keeps the project on track and maintains coordination among
            the team members.
          </p>
          <h4 className="text-2xl my-2 font-bold">Website Developer and Media Art Designer: Shri Ganesh Jha</h4>
          <p>
            Shri Ganesh Jha is responsible for developing the project's website and
            designing captivating media art that promotes Instant Cup Poha.
          </p>
          <h4 className="text-2xl my-2 font-bold">Marketing Salesman &amp; Financer: Arvind Kumar</h4>
          <p>
            Arvind Kumar wears multiple hats as he takes on the roles of a salesman and
            financer. He excels at marketing the product and ensuring the project's
            financial health.
          </p>
          <h4 className="text-2xl my-2 font-bold">Packaging Manager: Love Sharma</h4>
          <p>
            Love Sharma manages the packaging of Instant Cup Poha, ensuring it reaches
            consumers in perfect condition.
          </p>
          <h4 className="text-2xl my-2 font-bold">Quality Tester 1: Yash Kumar</h4>
          <p>
            Yash Kumar plays a crucial role as Quality Tester 1. He ensures that each
            serving of Cup Poha meets the highest quality standards.
          </p>
          <h4 className="text-2xl my-2 font-bold">Quality Tester 2: Mukesh Bhandari</h4>
          <p>
            Mukesh Bhandari serves as Quality Tester 2, conducting rigorous quality
            checks to guarantee that every cup of poha delivers a satisfying and
            consistent taste.
          </p>
          <h2>The Genesis of Instant Cup Poha</h2>
          <p>
            The idea for Instant Cup Poha was born out of the students' desire to create
            a quick, easy, and delicious meal option. Taking inspiration from the
            popularity of cup noodles, they embarked on a journey to create a similar
            concept for poha.
          </p>
          <h3>The Concept</h3>
          <p>
            Instant Cup Poha is designed to cater to the busy lives of individuals who
            crave a tasty meal but lack the time to prepare one. With this innovative
            product, you can enjoy the rich flavors of poha without the hassle of
            cooking it from scratch.
          </p>
        <div className="my-4">
        <Carousel>
          <img
            src="https://www.rigelgrinmedia.live/_next/image?url=https://rigelgrinmedia.github.io/cdn/img/blog/ofcpe.jpg&w=1080&q=75"
            alt="Cup Poha Banner"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-E3erdfyrPYBeMtwvt3As04LY4yJkY6YnaQ&usqp=CAU"
            alt="Business Blasters"
          />
        </Carousel>
        </div>
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
          <hr />
          <p>
            <b>Cup Poha</b> powered by <b>The Business Blasters</b>
          </p>
          <p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQx7eLGuQ-Fpi3To5a6TOKG33BYCWgfRWag&usqp=CAU"
              style={{ width: "50%" }}
            />
          </p>

        </div>

      </div>
    </div>
  );
}
