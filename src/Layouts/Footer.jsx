import { useForm } from "react-hook-form";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="footer"
      className="contact py-10 px-[30px] bg-black-50 lg6:px-[15px]"
    >
      {/* HEADINGS */}
      <div className="flex place-content-between place-items-center lg4:flex-col lg4:gap-8">
        {/* FORM */}

        <div>
          <p className="font-semibold text-[2rem] text-white-100 mb-5">
            Contact me
          </p>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/2a9e9cb3d044834c851f82083d3c502b"
            method="POST"
          >
            <input
              className="w-full rounded-md bg-blue-20 outline-blue-100 font-semibold placeholder-opaque-black- p-3"
              type="text "
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue-20   font-semibold outline-blue-100 placeholder-opaque-black p-3 mt-5 rounded-md "
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue-20 font-semibold outline-blue-100 placeholder-opaque-black p-3 my-5 rounded-md "
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <Button
              text="SEND ME A MESSAGE"
              color="orange"
              padding={12}
              type="submit"
            />

            {/* <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button> */}
          </form>
        </div>
        {/* Social Contacts */}
        <div className=" flex flex-col justify-start gap-10 lg4:flex-row">
          <a href="https://www.linkedin.com/in/igor-sirghii-00a528232">
            <div
              className=" cursor-pointer text-blue-20 text-[4rem] transition duration-500
      lg6:text-[3rem] hover:text-blue-gray-40"
            >
              <FaLinkedin />
            </div>
          </a>
          <a href="https://www.facebook.com/igor.sirghii">
            <div
              className=" cursor-pointer text-blue-20 text-[4rem] transition duration-500
      lg6:text-[3rem] hover:text-blue-gray-40"
            >
              <FaFacebookSquare />
            </div>
          </a>
          <a href="https://github.com/Igareok921?tab=repositories">
            <div
              className=" cursor-pointer text-blue-20 text-[4rem] transition duration-500
      lg6:text-[3rem] hover:text-blue-gray-40 "
            >
              <FaGithubSquare />
            </div>
          </a>
        </div>
      </div>
      <p className="text-white-100 mt-10 text-center">
        ©2023 Igor Sirghii. All Rights Reserved.
      </p>
    </section>
  );
};

export default Contact;
