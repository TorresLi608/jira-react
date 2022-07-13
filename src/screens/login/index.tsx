import React, { FormEvent } from "react";

export default function index() {
  const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
    
  }
  return <form onSubmit={handleSubmit}>
    <button type="submit">登录</button>
  </form>
}
