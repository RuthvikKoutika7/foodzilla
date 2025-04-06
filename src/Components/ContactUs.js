const ContactUs = () => {
  return (
    <div>
      <h1>Contact us</h1>
      {/* <h2>Contact Number: 9515240683</h2>
      <h2>mail: taffik7@gmail.com</h2> */}
      <div>
        <form >
          <input
            type="text"
            className="border border-black p-4 m-4"
            placeholder="name"
          ></input>
          <input
            type="text"
            className="border border-black p-4 m-4"
            placeholder="Message"
          ></input>
          <button className="border border-black p-4 m-4 rounded-xl bg-gray-400 " >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
