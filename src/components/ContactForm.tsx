import React from "react";
import Container from "./Container";
import Image from "next/image";

type Props = {
  displayTitle: boolean;
  title?: string;
};

const ContactForm = ({ displayTitle, title }: Props) => {
  return (
    <div className="contactComponent min-h-screen md:h-screen flex items-center my-24">
      <Container>
        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="flex flex-col md:w-5/12 backdrop-blur-xl mx-auto rounded-lg p-8">
            <div className="">
              {displayTitle && (
                <h1 className="text-3xl font-semibold">{title}</h1>
              )}
              <form className="space-y-5 pt-3">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input className="py-1.5 px-2 rounded" required name="name" id="name" placeholder="Name" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input className="py-1.5 px-2 rounded"
                    required
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="number">Number</label>
                  <input className="py-1.5 px-2 rounded"
                    required
                    name="Number"
                    type="number"
                    id="Number"
                    placeholder="Number"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Message">Message</label>
                  <textarea
                  className="py-1.5 px-2 rounded"
                    required
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={6}
                  />
                </div>
                <div className="text-center">
                  <button
                  className="py-2 px-4 rounded bg-yellow-500 text-white font-semibold"
                  >Submit</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
