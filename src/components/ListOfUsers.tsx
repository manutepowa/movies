interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

async function getUsers(): Promise<Comment[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      cache: "no-cache",
    }
  )
  const users = response.json()
  return users
}
export default async function ListOfUsers(): Promise<JSX.Element> {
  const users = await getUsers()
  return (
    <div>
      {users &&
        users.map((user: Comment) => {
          return <div key={user.id}>{user.name}</div>
        })}
    </div>
  )
}
