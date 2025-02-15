import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { app, firebaseAuth } from "../lib/firebase";

type LoginInformation = {
  username: string;
  password: string;
};

function Login() {
  const { register, handleSubmit, watch } = useForm<LoginInformation>();
  const onSubmit: SubmitHandler<LoginInformation> = (data) => signInWithEmailAndPassword(firebaseAuth, data.username, data.password).then((userCredential) =>{
    const user = userCredential.user
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  return (
    <form className="w-full h-full flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
      <Card className=" w-2xs aspect-square">
        <Input placeholder="username" {...register("username")} />
        <Input placeholder="password" {...register("password")} />
        <Input type="submit" className="cursor-pointer" />
      </Card>
    </form>
  );
}

export default Login;
