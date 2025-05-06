export default function TailwindTest() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl text-red-600 font-extrabold underline mb-6">
            Tailwind Test: Is This Red and Huge?
          </h1>
          <p className="text-lg text-gray-700">
            If you're seeing a large red heading above, Tailwind is working correctly ✅
          </p>
          <div className="mt-8 p-4 border border-dashed border-blue-400 bg-white rounded-lg shadow-sm">
            <p className="text-blue-500 font-medium">
              Tailwind is applying styles inside this blue-bordered box.
            </p>
          </div>
        </div>
    );
  }
  