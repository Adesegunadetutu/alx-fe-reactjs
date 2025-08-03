export default function Usercard({ users }) {
  if (!users.length) return <p className="text-gray-500 p-4">No users found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <a
          key={user.id}
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <p className="text-sm text-blue-500">{user.html_url}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
