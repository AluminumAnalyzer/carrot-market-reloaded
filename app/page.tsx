import Card from '@/components/Card';
import Inputbox from '@/components/Inputbox';

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen w-screen flex items-center justify-center p-5 dark:bg-gray-700 dark:sm:bg-red-100">
      <div className="flex flex-col gap-1 ">
        <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-md dark:bg-gray-600 flex flex-col gap-3  ">
          {['Me', 'Nico', 'You', 'Yourself', ''].map((person, index) => (
            <div key={index} className="flex items-center gap-5 group ">
              <div className="size-10 rounded-full bg-blue-400" />
              <span className="text-lg font-medium group-hover:text-red-400">
                {person}
              </span>

              <div className="size-5 bg-red-500 justify-center flex items-center rounded-full relative ">
                {index}
                <div className="size-5 bg-red-500  absolute animate-ping rounded-full" />
              </div>
            </div>
          ))}
        </div>
        <Card />
        <div className="flex flex-col justify-center ">
          <button className="btn">Click me</button>
          <a href="/">hello</a>
        </div>
        <div className="rounded-xl shadow-xl bg-yellow-200 p-3 *:text-cyan-800">
          <article className="prose lg:prose:xl  ">
            <h1>Garlic bread with cheese: what the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
          </article>
        </div>
        <Inputbox />
      </div>
    </main>
  );
}
