import { Button } from "flowbite-react";
import React, { useRef } from "react";
import { HiDownload } from "react-icons/hi";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
const Blog = () => {
  const componentRef = useRef(null);
  // const handleDownloadPdf = () => {
  //   const pdfDoc = new jsPDF();
  //   const pageContent = document.getElementById("page-content");
  //   pdfDoc.text(pageContent, 10, 10);

  //   pdfDoc.save("hello_world.pdf");
  // };
  const handleDownloadPdf = async () => {
    const pdfDoc = new jsPDF("p", "mm", "a4");
    const component = componentRef.current;
    html2canvas(component).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Add the screenshot to the PDF
      pdfDoc.addImage(imgData, "PNG", 10, 10, 180, 0);

      // Save the PDF
      pdfDoc.save("Blog.pdf");
    });
  };

  return (
    <div className="my-container  border">
      <div className="flex justify-center my-6">
        <Button onClick={handleDownloadPdf} pill={true}>
          Download PDF <HiDownload className="h-6 w-6" />
        </Button>
      </div>

      <div ref={componentRef} className="text-white">
        <h1 className="text-center text-black text-4xl font-bold">
          <Link to="https://github.com/sohagrana921">
            Answer Some Question:-
          </Link>
        </h1>
        <div className=" mt-12 p-10 bg-pink-950 rounded-lg">
          <h3 className="text-2xl font-bold">
            1. Tell us the differences between uncontrolled and controlled
            components?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-
            <span>
              Controlled components are those where the state of the component
              is explicitly managed by the application code. This means that
              when the user interacts with the component, the application
              updates its internal state to reflect the user's input. The
              component then re-renders with the updated state. <br />
              <br /> In contrast, is uncontrolled components are those where the
              state is managed internally by the component. In this case, when
              the user interacts with the component, the component updates its
              own internal state without notifying the application. The
              application can still access the state of the component, but it
              has no control over how it is updated. <br />
              <br />
              The main advantage of using controlled components is that the
              application has complete control over the state of the user
              interface, making it easier to implement complex behaviors and
              handle edge cases. Uncontrolled components, on the other hand, can
              be simpler to implement and require less boilerplate code, but
              they can also be harder to reason about and may be more prone to
              bugs.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10 bg-pink-950 rounded-lg">
          <h3 className="text-2xl font-bold">
            2. How to validate React props using PropTypes?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-
            <span>
              We can use isRequired to specify that a prop is required and
              should be present, and we can use various PropTypes such as
              string, number, and func to specify the expected type of each
              prop. <br /> <br />
              When a prop is passed to the component that does not match the
              specified PropTypes, a warning will be logged to the console in
              development mode. This can help we catch errors early on and
              ensure that wer components are receiving the correct data. It's
              important to note that PropTypes are only checked in development
              mode, so we should always validate we props during development to
              catch any errors early on. In production mode, the PropTypes are
              ignored to improve performance.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10 bg-pink-950 rounded-lg">
          <h3 className="text-2xl font-bold">
            3. Tell us the difference between nodejs and express js?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-
            <span>
              Node.js is a JavaScript runtime environment, while Express.js is a
              web framework built on top of Node.js. Node.js provides the basic
              infrastructure for running JavaScript on the server-side, while
              Express.js provides a layer of abstraction on top of Node.js that
              simplifies web development tasks. Node.js is designed to be
              flexible and scalable, while Express.js is minimalist and
              unopinionated, giving developers more control over their
              applications.
            </span>
          </p>
        </div>
        <div className=" mt-4 p-10 bg-pink-950 rounded-lg">
          <h3 className="text-2xl font-bold">
            4. What is a custom hook, and why will we create a custom hook?
          </h3>
          <p className="text-xl font-semibold">
            Ans:-{" "}
            <span>
              A custom hook is a function in React that allows we to reuse
              stateful logic between different components. Custom hooks can be
              created to abstract away complex logic and provide a simpler
              interface to the components that use them. They can also help
              improve code reusability and maintainability. <br /> <br />
              we might create a custom hook if we find werself writing similar
              logic in multiple components. By abstracting that logic into a
              custom hook, we can simplify wer components and reduce
              duplication. Custom hooks can also be useful for handling side
              effects, such as fetching data or updating the document title, as
              they can be reused across multiple components.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
