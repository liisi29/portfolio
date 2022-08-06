import IconList from "@components/elements/IconList";
import SectionHeader from "@components/elements/sectionHeader/SectionHeader";
import React, { useState } from "react";
import BigArrow from "../../elements/BigArrow";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <section id="contact" className="_bg-dark">
      <SectionHeader section="contact" sectionColor="dark" />
      <BigArrow />
      <article className="max-w-[1240px] z-10  w-full h-full mx-auto text-center">
        <h2 className="py-2">Liisi Raidaru</h2>
        <IconList />
        liisi.raidaru@gmail.com
      </article>
    </section>
  );
}

export default Contact;
