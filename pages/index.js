export default function Home() {
  return (
    <main className="grid place-content-center h-[100vh]">
      <div className="max-w-5xl w-full flex-col gap-8 font-mono text-sm lg:flex">
        <p className="text-2xl">Mastering Context</p>
        <ul className="flex flex-col gap-4 list-disc text-lg">
          <li>Prop drilling</li>
          <li>
            Context with <code>useState</code>
          </li>
          <li>Multiple contexts</li>
          <li>
            Context with <code>useReducer</code>
          </li>
          <li>State management</li>
          <li>Replacing state management with context</li>
          <li>Context updates and rendering</li>
        </ul>
      </div>
    </main>
  );
}
