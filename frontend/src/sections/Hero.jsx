import InputTodo from "../components/InputTodo.jsx"
import ListTodo from "../components/ListTodo.jsx"

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white-200 shadow-2xl">
    <InputTodo/>
    <ListTodo/>
   
    </section>
  )
}

export default Hero