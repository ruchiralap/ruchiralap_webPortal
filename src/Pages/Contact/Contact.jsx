import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BookOpenText, Clock, MapPin } from "lucide-react";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_ij3izl7",
        "template_qfy837q",
        form.current,
        "vnSlBv7_pqVuL6Mm6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <SharedBanner
        title="CONTACT US"
        image="https://www.synchotelier.com/wp-content/uploads/2024/03/contactus.webp"
      ></SharedBanner>
      <div className="flex flex-col md:flex-row p-5 lg:p-8 mx-auto max-w-7xl">
        <div className=" w-full">
          <section id="contact" className="w-full TEXT-BLACK py-20">
            <p className="text-2xl  font-bold capitalize text-center">
              WE WOULD LOVE TO HEAR FROM YOU
            </p>
            <div className="mx-auto flex justify-center rounded-2xl">
              <div className="w-full h-auto  flex flex-col justify-center p-4">
                {/* <ContactLeft /> */}
                <div className="w-full border-t-4 border-yellow-400 h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-lg ">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full flex flex-col gap-4 lg:gap-6 py-2 lgl:py-5"
                  >
                    {errMsg && (
                      <p className="py-3 bg-red-100/20 backdrop-blur-md text-center text-red-500 text-base tracking-wide">
                        {errMsg}
                      </p>
                    )}
                    {successMsg && (
                      <p className="py-3 bg-green-100/20 backdrop-blur-md text-center text-green-500 text-base tracking-wide">
                        {successMsg}
                      </p>
                    )}
                    <div className="w-full flex flex-col lg:flex-row gap-10">
                      <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <p className="text-sm  uppercase tracking-wide">
                          Your name
                        </p>
                        <input
                          name="user_name"
                          className={`${
                            errMsg === "Username is required!" &&
                            "outline-designColor"
                          } input input-bordered text-gray-900`}
                          type="text"
                        />
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <p className="text-sm uppercase tracking-wide">
                          Phone Number
                        </p>
                        <input
                          name="user_phone"
                          className={`${
                            errMsg === "Phone number is required!" &&
                            "outline-designColor"
                          } input-bordered input text-gray-900`}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-sm  uppercase tracking-wide">Email</p>
                      <input
                        name="user_email"
                        className={`${
                          errMsg === "Please give your Email!" &&
                          "outline-designColor"
                        } contactInput input-bordered input `}
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-sm uppercase tracking-wide">Subject</p>
                      <input
                        name="user_subject"
                        className={`${
                          errMsg === "Plese give your Subject!" &&
                          "outline-designColor"
                        } input-bordered input text-gray-900`}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-sm  uppercase tracking-wide">
                        Message
                      </p>
                      <textarea
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className={`${
                          errMsg === "Message is required!" &&
                          "outline-designColor"
                        } text-gray-900 input-bordered input`}
                        cols="30"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="w-full">
                      {/* <button
              onClick={handleSend}
              className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
            >
              Send Message
            </button> */}
                      <input
                        className="w-full btn h-12  border mt-7  rounded-full px-12 py-4  text-[#201700] bg-[#F9C302] font-extrabold"
                        type="submit"
                        value="Send"
                      />
                    </div>
                    {errMsg && (
                      <p className="py-3 bg-red-100/20 backdrop-blur-md text-center text-red-500 text-base tracking-wide">
                        {errMsg}
                      </p>
                    )}
                    {successMsg && (
                      <p className="py-3 bg-green-100/20 backdrop-blur-md text-center text-green-500 text-base tracking-wide">
                        {successMsg}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex px-10 pt-20 justify-center m-5 md:m-20">
          <div className="space-y-16">
            <div className="ps-5 space-y-2 bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-5 border-l-4 border-yellow-400">
              <div className="flex items-center space-x-4">
                <MapPin size={32} color="#ffc524" />
                <p className="text-2xl font-bold uppercase text-gray-700">
                  Address
                </p>
              </div>
              <p className="ps-9 text-gray-600">
                Rampura, Banasree, Dhaka, 1219
              </p>
            </div>

            <div className="ps-5 space-y-2 bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-5 border-l-4 border-yellow-400">
              <div className="flex items-center space-x-4">
                <BookOpenText size={32} color="#ffc524" />
                <p className="text-2xl font-bold uppercase text-gray-700">
                  Information
                </p>
              </div>
              <p className="ps-9 text-gray-600">
                কল করুন: 09642 922 922 (২৪ ঘন্টা খোলা) প্রবাস থেকে পরিবারের কাছে
                উপহার পাঠাতে যোগাযোগ করুন (WhatsApp)+8801321208940
              </p>
            </div>

            <div className="ps-5 space-y-2 bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-5 border-l-4 border-yellow-400">
              <div className="flex items-center space-x-4">
                <Clock size={32} color="#ffc524" />
                <p className="text-2xl font-bold uppercase text-gray-700">
                  Business Hours
                </p>
              </div>
              <p className="ps-9 text-gray-600">Mon-Fri 10am - 8pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
