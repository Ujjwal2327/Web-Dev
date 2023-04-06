import Template from "./Components/Template";

export default function App() {
  return (
    <div className="flex flex-col bg-blue-300 py-10 gap-y-10">
      <h1 className="uppercase w-11/12 mx-auto bg-white rounded-md text-center font-bold py-2 text-3xl">
        Random Gifs
      </h1>

      <Template type='random' />
      <Template type='tag' />

    </div>

    );
}
