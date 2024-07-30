import React from 'react';
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="pt-20">
            <h1 className="text-2xl font-semibold text-pink-500 md:text-4xl flex justify-center">
              Contact us
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mt-10 space-y-4">
            <div className="w-full max-w-md">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md outline-none bg-white dark:bg-gray-800"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="w-full max-w-md">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md outline-none bg-white dark:bg-gray-800"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="w-full max-w-md">
              <label htmlFor="message">Type your message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full h-40 px-4 py-2 border rounded-md outline-none bg-white dark:bg-gray-800"
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="mt-8">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
