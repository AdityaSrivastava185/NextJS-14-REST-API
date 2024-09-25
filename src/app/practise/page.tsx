import { revalidateTag } from "next/cache";
import Image from "next/image";

export interface Users{
  id?:number
  username:string
  name:string
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users" , {
    cache : 'no-cache',
    next : {
      tags : ["username"]
    }
  })

  const addUsersToDatabase = async (e:FormData) => {
    "use server"
    const username = e.get("username")?.toString()
    const name = e.get("name")?.toString()
    if(!username || !name ) return
    const newUsers:Users = {
      username,
      name,
    
    }
    await fetch('https://jsonplaceholder.typicode.com/users' , {
      method : 'POST',
      body : JSON.stringify(newUsers),
      headers : {
        'Contetn-Type' : 'application/json'
      }
    })
    revalidateTag('users')
  }

  const products : Users[] = await res.json()
  return (
    <div>
      <main className="">
      <h1 className="text-3xl font-bold text-ceter">Users Warehouse</h1>
        <form action={addUsersToDatabase} className="flex flex-col max-w-xl gap-10 mx-auto p-5">
          <input name="Username" placeholder="username" className="border border-gray-300 p-2 rounded-md" />
          <input name="Name" placeholder="name" className="border border-gray-300 p-2 rounded-md" />
          <button className="bg-black text-white rounded-lg py-3">Add the product ✅</button>
        </form>

        <h2 className="text-3xl font-bold text-ceter">List of all the users</h2>
        {
          products.map((product) => (
            <div key={product.id} className="p-5 shadow">
              <p> {product.name} </p>
              <p> {product.username} </p>
            </div>
          ))
        }

      </main>
    </div>
  );
}
