import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <div className='grid col-lg-6 col-sm-12 mx-auto text-start my-5'>
        <div>
          <h5 className="fw-bold">(Q) Difference between javascript and nodejs. ? </h5>
          <h6>
            <strong>Answer : </strong> Javascript is a programming language that
            runns on any browser by using a javascript engine like V8 in chrome.
            It is an object oriented language that is used to build dynamic web
            pages. It can also be used for mobile app development and game
            development. theh other hand Node.Js is an open-source Javascript
            runtime environment that enables javascript to run on the server.
            Node.Js runns on various platforms like, Windows, Linux, Mac OS,
            etc. As a result it provides cross-platform runtime environment with
            event-driven, non-blocking for creating highly scalable server-side
            JS application.
          </h6>
        </div>
        <div>
          <h5 className="fw-bold">
            (Q) When should you use nodejs and when should you use mongodb. ?{" "}
          </h5>
          <h6>
            <strong>Answer : </strong> MongoDB & Node.Js are two diffrent
            tecnologie. Where MongoDB is a NoSQL database system. As like other
            database system it also gives us ability to efficiently execute
            operation for store, read, update and delete data as a JSON
            document. But I basically use it when I need to manage high
            availability of data with automatic, fast, and instant data
            recovery. <br />
            NodeJS is a JavaScript runtime environment. It is basically used to
            execute our javascript application. I mostly use NodeJS to connect
            my client site to database by making it's server site JSON files.
          </h6>
        </div>
        <div>
          <h5 className="fw-bold">(Q) Differences between sql and nosql databases. ? </h5>
          <h6>
            <strong>Answer : </strong> <br />
            (1) SQL Databases are relational & NoSQL Databases are
            non-relational. <br />
            (2) SQL databases use structured query language and have a
            predefined schema. NoSQL databases have dynamic schemas for
            unstructured data. <br />
            (3) SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. <br />
            (4) SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores. <br />
            (5) SQL databases are better for multi-row transactions, while NoSQL
            is better for unstructured data like documents or JSON. <br />
          </h6>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
