"use client";
import Image from "next/image";
import img1 from "../../assets/fire-cylinder.jpg";

const About = () => {
  return (
    <div className="my-10 px-16 py-5 grid grid-cols-2 gap-10">
      <div className="flex items-center justify-center">
        <Image
          className="w-96 h-[32rem] rounded-md"
          src={img1}
          width={500}
          height={300}
          alt="Picture of the author"
        />
      </div>
      <div className="py-8">
        <h1 className="text-3xl font-bold">About Company</h1>
        <div className="my-4 flex flex-col gap-4">
          <p>
            At <strong>Exponential Infradesign Pvt Ltd</strong>, we are
            dedicated to safeguarding lives and property by providing
            top-quality fire-fighting equipment and solutions. With years of
            expertise in the industry, we understand the critical importance of
            reliable, state-of-the-art fire protection systems that meet and
            exceed safety standards. From advanced fire extinguishers and
            hydrant systems to complete fire suppression solutions, our products
            are designed to perform when it matters most.
          </p>
          <p>
            Our mission is to be a trusted partner in fire safety for
            businesses, communities, and individuals. We work with the best
            manufacturers and maintain stringent quality checks to ensure that
            every product we supply is effective, durable, and compliant with
            industry regulations. Our team of knowledgeable professionals is
            here to assist with customized solutions, on-site training, and
            ongoing support, empowering our clients with the tools and knowledge
            to handle fire emergencies effectively.
          </p>
          <p>
            Whether you’re in need of essential fire extinguishers or a
            comprehensive fire safety system,
            <strong> Exponential Infradesign Pvt Ltd</strong> is committed to
            delivering excellence, innovation, and safety. Together, we can
            build a safer environment and a more resilient future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
