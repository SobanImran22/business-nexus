export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-3" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3" />
        <select className="border p-2 w-full mb-3">
          <option value="investor">Investor</option>
          <option value="entrepreneur">Entrepreneur</option>
        </select>
        <button className="bg-green-600 text-white py-2 w-full">Register</button>
      </form>
    </div>
  );
}
