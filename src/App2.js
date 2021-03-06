import React from "react";
import MyForm from "./components2/MyForm";
import { useForm, FormProvider } from "react-hook-form";

function App() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "male",
      hobbies: ["cooking", "coding"],
    },
  });

  const onSubmit = (data) => console.log(data);
  const onError = (error) => console.log(error);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)}>
        <MyForm />
      </form>
    </FormProvider>
  );
}

export default App;