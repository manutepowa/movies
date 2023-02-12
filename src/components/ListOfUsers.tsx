async function getUsers(): Promise<any> {
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
        users.map((user: any) => {
          return <div>{user.name}</div>
        })}
    </div>
  )
}
