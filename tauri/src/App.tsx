import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="m-0 pt-[10vh] flex flex-col justify-center text-center">
      <h1 className="text-center text-3xl font-semibold mb-6">
        Welcome to Tauri + React
      </h1>

      <div className="flex justify-center mb-6">
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="font-medium text-[#646cff] no-underline hover:text-[#535bf2] dark:hover:text-[#24c8db]"
        >
          <img
            src="/vite.svg"
            className="h-24 p-6 transition-all duration-700 hover:drop-shadow-[0_0_2em_#747bff]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://tauri.app"
          target="_blank"
          className="font-medium text-[#646cff] no-underline hover:text-[#535bf2] dark:hover:text-[#24c8db]"
        >
          <img
            src="/tauri.svg"
            className="h-24 p-6 transition-all duration-700 hover:drop-shadow-[0_0_2em_#24c8db]"
            alt="Tauri logo"
          />
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          className="font-medium text-[#646cff] no-underline hover:text-[#535bf2] dark:hover:text-[#24c8db]"
        >
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all duration-700 hover:drop-shadow-[0_0_2em_#61dafb]"
            alt="React logo"
          />
        </a>
      </div>
      <p className="mb-6">
        Click on the Tauri, Vite, and React logos to learn more.
      </p>

      <form
        className="flex justify-center mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          className="mr-[5px] rounded-lg border border-transparent px-5 py-2.5 text-base font-medium text-[#0f0f0f] bg-white transition-colors duration-250 shadow-[0_2px_2px_rgba(0,0,0,0.2)] outline-none hover:border-[#396cd8] dark:text-white dark:bg-[#0f0f0f98]"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg border border-transparent px-5 py-2.5 text-base font-medium text-[#0f0f0f] bg-white transition-colors duration-250 shadow-[0_2px_2px_rgba(0,0,0,0.2)] outline-none hover:border-[#396cd8] active:border-[#396cd8] active:bg-[#e8e8e8] dark:text-white dark:bg-[#0f0f0f98] dark:active:bg-[#0f0f0f69]"
        >
          Greet
        </button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
