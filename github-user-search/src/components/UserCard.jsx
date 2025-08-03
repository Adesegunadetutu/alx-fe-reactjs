export default function UserCard({ user }) {
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      className="block mb-4 p-4 bg-white shadow hover:shadow-md rounded transition"
    >
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <p className="text-sm text-gray-500">{user.html_url}</p>
        </div>
      </div>
    </a>
  );
}
