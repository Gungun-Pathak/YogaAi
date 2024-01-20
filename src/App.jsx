import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*navbar*/}
      <nav className=" p-4 flex justify-between items-center font-bold">
        {/* Left side of the Navbar */}
        <div className="flex space-x-24 text-black">
          <a href="#" className="text-black  text-xl ml-14 font-bold">
            Home
          </a>
          <a href="#" className="text-black text-xl font-bold">
            About
          </a>
          <a href="#" className="text-black text-xl font-bold ">
            Contact
          </a>
        </div>

        {/* Right side of the Navbar */}
        <div className="flex space-x-4">
          <button className="bg-white text-black px-4 py-2 text-xl font-bold rounded-lg border-2 border-black">
            Sign In
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-lg text-xl font-bold border-black border-2">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="ml-16 my-14">
        <h1 className="text-6xl font-bold ">Your Personal </h1>

        <h1 className="text-6xl font-bold my-5">AI Yoga Trainer</h1>
        <div className="w-1/2">
          <p className=" my-10 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi
            aperiam fuga, iusto consequuntur eligendi provident sed quasi
            placeat, debitis velit aspernatur, quidem omnis illo commodi
            tempora? Praesentium, inventore nam?
          </p>
        </div>
        <button className=" text-white px-4 py-2 rounded-lg text-xl font-bold border-black border-2 bg-black">
          Get Started
        </button>
      </div>
      {/*cards*/}
      <div class=" h-20 mt-11 self-center p-4 ">
        <center>
          <h1 class=" text-5xl font-medium ">
            Our Special Features and Insights!
          </h1>
        </center>
      </div>
      <div className="  h-fit">
        <div className="container mx-auto mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg h-96 hover:scale-110  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1197908606239125676/relaxation-4422090_1920.png?ex=65bcfa53&is=65aa8553&hm=33abe29abc48bafb0b3aca81b1cc649568ee6e9468c7dd1e288b212de0109cf5&=&format=webp&quality=lossless&width=832&height=537"
                alt="Item 1"
                class="w-full  object-cover rounded-lg mb-2 h-80 "
              ></img>
              <p className="text-xl font-semibold">Personalized Yoga Plans</p>
              <p className="text-gray-600"></p>
            </div>

            <div className="bg-white p-4 shadow-lg rounded-lg h-96 hover:scale-110  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1197908330211975279/152363-yoga-sunset-wallpaper-top-free-yoga-sunset-background.png?ex=65bcfa11&is=65aa8511&hm=630d6390707fbccc4b65e97c82d28bad58eb4c1a00cd0f1f3cc834f88c5f8ec4&=&format=webp&quality=lossless&width=801&height=537"
                alt="Item 2"
                class="w-full object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Virtual Yoga Instructor</p>
              <p className="text-gray-600"></p>
            </div>

            <div className="hover:scale-110 bg-white p-4 shadow-lg rounded-lg h-96  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1197907846755536907/purple-sunset-yoga-reflection-entovegan.png?ex=65bcf99e&is=65aa849e&hm=b16a778a7933dbb9568417895567f9fbaf402bbf241154fe19fed82dbc57a7b9&=&format=webp&quality=lossless&width=805&height=537"
                alt="Item 3"
                class="w-full  object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">
                AI-Powered Pose Correction
              </p>
              <p className="text-gray-600"></p>
            </div>

            <div class="bg-white p-4 hover:scale-110  shadow-lg rounded-lg h-96 hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1197908062674100244/sunset-yoga.png?ex=65bcf9d2&is=65aa84d2&hm=702478d3b6f445fb7d10844097d973de021ddc9b263d4e0e35ceb695f310f560&=&format=webp&quality=lossless&width=807&height=537"
                alt="Item 4"
                class="w-full  object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Community Integration</p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
      {/*Track Section*/}
      <div className=" justify-items-end">
        <h1 className="text-5xl my-14  font-bold ml-96">
          Select What You Need !
        </h1>
      </div>
      <div className="flex flex-col w-72 ml-20">
        <button className=" text-white font-bold py-2 px-4 my-2 rounded border-black border-2 text-xl bg-blue-500 hover:bg-black active:bg-blue-950 focus:outline-none focus:ring focus:ring-violet-300">
          Begginers Track
        </button>
        <button className=" text-white font-bold py-2 px-4 my-2 rounded border-black border-2  text-xl bg-blue-500 hover:bg-black active:bg-blue-950 focus:outline-none focus:ring focus:ring-violet-300">
          Power Yoga Track
        </button>
        <button className=" text-white font-bold py-2 px-4 my-2 rounded border-black border-2 text-xl bg-blue-500 hover:bg-black active:bg-blue-950 focus:outline-none focus:ring focus:ring-violet-300">
          Immunity Booster Track
        </button>
        <button className=" text-white font-bold py-2 px-4 my-2 rounded border-black border-2 text-xl bg-blue-500 hover:bg-black active:bg-blue-950 focus:outline-none focus:ring focus:ring-violet-300">
          Yoga in Pregnancy Track
        </button>
        <button className=" text-white font-bold py-2 px-4 my-2 rounded border-black border-2 text-xl bg-blue-500 hover:bg-black active:bg-blue-950 focus:outline-none focus:ring focus:ring-violet-300">
          Cardiovascular Track
        </button>
        <button className=" text-white font-bold py-2 px-4 my-2 rounded border-black border-2  text-xl bg-blue-500 hover:bg-black active:bg-blue-950 focus:outline-none focus:ring focus:ring-violet-300">
          Yoga For Migraine Track
        </button>
      </div>
      <div className="container mx-auto mt-8 h-80 bg-gradient-to-r   ">
        <div className="w-full p-4 flex h-96 bg-gradient-to-r place-self-center  ">
          <img
            class="w-1/2 self-center h-80 mt-8 rounded-lg hover:scale-200"
            src="https://media.discordapp.net/attachments/1164497786964803585/1197908606239125676/relaxation-4422090_1920.png?ex=65bcfa53&is=65aa8553&hm=33abe29abc48bafb0b3aca81b1cc649568ee6e9468c7dd1e288b212de0109cf5&=&format=webp&quality=lossless&width=832&height=537"
            alt="Image"
          ></img>

          <div className="w-1/2 p-4 place-self-center">
            <h1 className="text-4xl my-8">Personalized Yoga Plans</h1>
            <p className="text-lg self-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, fugiat. Adipisci eius quam dolor nostrum. Sequi vitae
              enim ad nemo ex eaque. Quasi vel repellat exercitationem
              doloremque! Ut, debitis iusto.
            </p>
          </div>
        </div>

        <div className="w-full p-4 flex h-96 bg-gradient-to-r   place-self-center  ">
          <p className="text-lg  w-1/2 self-center">
            <h1 className="text-4xl my-8 ">Virtual Yoga Instructor</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            aspernatur deleniti. Cum fugit amet hic nisi perspiciatis qui
            dolores fuga officia quam! Repudiandae non a veritatis assumenda,
            facere nostrum ipsum?
          </p>

          <div className="w-1/2 p-4 place-self-center">
            <img
              className=" self-center h-80 mt-8 rounded-lg "
              src="https://media.discordapp.net/attachments/1164497786964803585/1197908330211975279/152363-yoga-sunset-wallpaper-top-free-yoga-sunset-background.png?ex=65bcfa11&is=65aa8511&hm=630d6390707fbccc4b65e97c82d28bad58eb4c1a00cd0f1f3cc834f88c5f8ec4&=&format=webp&quality=lossless&width=801&height=537"
              alt="Image"
            ></img>
          </div>
        </div>
        <div className="w-full p-4 flex h-96 bg-gradient-to-r   place-self-center  ">
          <img
            class="w-1/2 self-center h-80 mt-8 rounded-lg "
            src="https://media.discordapp.net/attachments/1164497786964803585/1197907846755536907/purple-sunset-yoga-reflection-entovegan.png?ex=65bcf99e&is=65aa849e&hm=b16a778a7933dbb9568417895567f9fbaf402bbf241154fe19fed82dbc57a7b9&=&format=webp&quality=lossless&width=805&height=537"
            alt="Image"
          ></img>

          <div className="w-1/2 p-4 place-self-center">
            <h1 className="text-4xl my-8">AI-Powered Pose Correction</h1>
            <p className="text-lg self-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              ab ullam odit a quos, alias tenetur quae reprehenderit molestias,
              dolores est quas magni dolore nemo sequi animi. Quisquam, natus
              sapiente?
            </p>
          </div>
        </div>

        <div className="w-full p-4 flex h-96 bg-gradient-to-r  place-self-center  ">
          <p className="text-lg  w-1/2 self-center">
            <h1 className="text-4xl my-8 ">Community Integration</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi
            ratione, repellat dolor sequi nisi tenetur, eius ullam quo
            necessitatibus non. Nesciunt sit voluptatum ab quis sunt ipsam
            repellat illum!
          </p>

          <div className="w-1/2 p-4 place-self-center">
            <img
              className=" self-center h-80 mt-8 rounded-lg "
              src="https://media.discordapp.net/attachments/1164497786964803585/1197908062674100244/sunset-yoga.png?ex=65bcf9d2&is=65aa84d2&hm=702478d3b6f445fb7d10844097d973de021ddc9b263d4e0e35ceb695f310f560&=&format=webp&quality=lossless&width=807&height=537"
              alt="Image"
            ></img>
          </div>
        </div>
        <div className="ml-10 ">
          {" "}
          <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-8 text-lg font-bold">
              Feel free to reach out to us with any questions or concerns.
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="xyz"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="xyz@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
