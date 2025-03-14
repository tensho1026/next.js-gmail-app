"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if(res.status === 200) console.log("メール送信できました")
    })
  };

  return (
    <div className='container mt-5'>
      <h2 className='mb-3'>Next.js Gmailアプリ</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            お名前
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            required
            ref={nameRef}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            メールアドレス
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            required
            ref={emailRef}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>
            メッセージ
          </label>
          <textarea
            className='form-control'
            id='message'
            required
            ref={messageRef}
          >
            {" "}
          </textarea>
        </div>
        <button type='submit' className='btn btn-danger'>
          メール送信
        </button>
      </form>
    </div>
  );
}
