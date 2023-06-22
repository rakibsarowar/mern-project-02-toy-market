import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl my-8 font-bold uppercase text-center'>Blogs</h2>
            <div className='flex justify-center'>
                <div className="container bg-base-100 shadow-xl p-10 m-8">
                    <h2 className="card-title mt-6">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h2>
                    <p className='px-8'>-
                        An access token and a refresh token are commonly used in authentication and authorization systems. Here's an explanation of what they are, how they work, and where to store them on the client-side: <br />
                        Access Token: An access token is a credential that is used to gain access to protected resources. It represents the authorization granted to a client application to perform certain actions on behalf of a user. Access tokens typically have a limited lifespan and expire after a certain period or when the user logs out. They are commonly used in token-based authentication systems, such as OAuth 2.0.
                        <br /> <br /> Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token once the previous access token has expired. When an access token expires, the client application can use the refresh token to request a new access token without requiring the user to reauthenticate. Refresh tokens are securely stored and should be kept confidential.
                    </p>
                    <p className='px-8 mb-4'>
                        Here's a high-level overview of how access tokens and refresh tokens work together:
                        <br /> Authentication: The user authenticates with the server using their credentials (e.g., username and password). <br />
                        Token Issuance: Upon successful authentication, the server issues an access token and a refresh token to the client application. <br />
                        Access Token Usage: The client application includes the access token in each request to access protected resources on the server. The server verifies the token's validity and checks if the user has the necessary permissions to perform the requested action. <br />
                        Expiration and Renewal: If the access token expires, the client application can use the refresh token to request a new access token from the server without requiring the user to reauthenticate. The server validates the refresh token and, if valid, issues a new access token. <br />
                        Regarding the storage of tokens on the client-side, it is essential to prioritize security to prevent unauthorized access.

                    </p>
                    <h2 className="card-title mt-6">
                        2. Compare SQL and NoSQL databases?
                    </h2>
                    <p className='px-8 mb-4'>SQL and NoSQL are two distinct types of database management systems, each with its own characteristics and use cases. Here's a comparison between SQL and NoSQL databases: <br /> <br />
                        Data Model:
                        SQL (Structured Query Language) databases use a structured data model based on tables, rows, and columns. They enforce a predefined schema, where the data conforms to a specific structure.
                        NoSQL (Not Only SQL) databases use various data models, including key-value, document, columnar, and graph. They offer flexible schemas that allow for dynamic and unstructured data.
                        <br /> <br />
                        Schema:
                        SQL databases have a fixed schema, which means the structure of the data is defined upfront. Any changes to the schema require altering the database schema.
                        NoSQL databases typically have a flexible schema. They allow for schema-less or schema-on-read approaches, where data can be added or modified without the need to define a strict schema. <br /> <br />
                        Scalability:
                        SQL databases are generally designed for vertical scalability, meaning they can handle increasing loads by adding more powerful hardware resources (e.g., CPU, RAM).
                        NoSQL databases are designed for horizontal scalability, allowing for distributed architectures and the ability to scale out across multiple servers or nodes. This makes them well-suited for handling large amounts of data and high traffic loads.

                    </p>

                    <h2 className="card-title mt-6">
                        3. What is express js? What is Nest JS?
                    </h2>
                    <p className='px-8 mb-4'>
                        Express.js is lightweight and highly customizable, making it suitable for small to medium-sized projects where simplicity and flexibility are desired. It has a large and active community, with plenty of third-party middleware and extensions available. <br /> <br />

                        Nest.js is particularly well-suited for building complex, scalable applications, such as enterprise applications or microservices, where maintainability, structure, and testability are crucial. It provides built-in support for modules, dependency injection, validation, and many other features out of the box.

                    </p>
                    <h2 className="card-title mt-6">
                        4. What is MongoDB aggregate and how does it work (google it)?
                    </h2>
                    <p className='px-8 mb-4'>
                        In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data within the database, combining multiple stages of operations to perform complex calculations, filtering, grouping, and data analysis. The aggregate framework is flexible and powerful, offering a wide range of operators and stages to manipulate and aggregate data. <br /> <br />
                        The basic structure of an aggregate operation consists of an array of stages. Each stage represents a specific operation or transformation applied to the data. The stages are processed in sequence, with the output of one stage becoming the next stage’s input.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;