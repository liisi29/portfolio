import IconList from "@components/elements/IconList";
import React, { useState } from "react";
import BigArrow from "../elements/BigArrow";

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
      <BigArrow />
      <article>
        <div>
          <h2 className="py-2">Liisi Raidaru</h2>
          <IconList />
        </div>
      </article>
    </section>
  );
}

export default Contact;
