export function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <form className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center">Επικοινωνία</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Όνομα
          </label>
          <input
            type="text"
            placeholder="Το όνομά σας"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Μήνυμα
          </label>
          <textarea
            placeholder="Το μήνυμά σας"
            className="mt-1 w-full p-2 border rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Αποστολή
        </button>
      </form>
    </div>
  );
}
