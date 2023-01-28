import React from 'react'
import emailjs from "emailjs-com";
import API from '../utils/API';

const titleEl = document.querySelector("#subject")
const postEl = document.querySelector("#post-text")

export default function PostForm() {

    async function createPost(postObj) {
        await console.log(postObj);
        
        await API.createPost(postObj)
    }

    async function sendPost(e) {
        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    
        await emailjs
          .sendForm("service_eoyq1w5", "template_tobhppj", e.target, "3eJvPeASOvZx1u5Cr")
          .then(
            (result) => {
              window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            },
            (error) => {
              console.log(error.text);
            }
          );

          createPost({
            title: titleEl.value,
            text: postEl.value,
            userId: 1,
          })
      }


    return (
          <form className="contact-form" onSubmit={sendPost}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Title/Subject</label>
      <input type="text" name="subject" id="subject"/>
      <label>Message</label>
      <textarea name="post-text" id="post-text" />
      <input type="submit" value="Send" />
    </form>
    )
}
