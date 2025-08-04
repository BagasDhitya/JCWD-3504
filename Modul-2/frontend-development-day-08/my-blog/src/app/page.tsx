'use client'
import { useState, useEffect } from "react";
import { useJsonPlaceholder } from "@/helpers/useJsonPlaceholder";
import axios from "axios";

interface JsonPlaceholderBody {
  userId: number,
  id: number,
  title: string,
  body: string
}

export default function Home() {

  // const { data } = useJsonPlaceholder()

  const [data, setData] = useState<JsonPlaceholderBody[]>()

  async function fetchJsonPlaceholder() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchJsonPlaceholder()
  }, [])

  return (
    <main className="w-screen h-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-5">
        {
          data?.map((item: JsonPlaceholderBody) => {
            return (
              <div className="border rounded-md p-3">
                <h2 className="text-lg text-slate-700">{item?.title}</h2>
                <p className="text-md text-slate-500">{item?.body}</p>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}

// 'use client'

// import { useEffect } from "react";

// export default function Home() {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await res.json();

//         const container = document.getElementById('post-container');
//         if (container) {
//           data.forEach((item: { title: string, body: string }) => {
//             const card = document.createElement('div');
//             card.className = 'border rounded-md p-3';

//             const title = document.createElement('h2');
//             title.className = 'text-lg text-slate-700';
//             title.innerText = item.title;

//             const body = document.createElement('p');
//             body.className = 'text-md text-slate-500';
//             body.innerText = item.body;

//             card.appendChild(title);
//             card.appendChild(body);

//             container.appendChild(card);
//           });
//         }
//       } catch (err) {
//         console.error('Fetch error:', err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <main className="w-screen h-full flex flex-col justify-center items-center">
//       <div id="post-container" className="grid grid-cols-3 gap-5"></div>
//     </main>
//   );
// }

