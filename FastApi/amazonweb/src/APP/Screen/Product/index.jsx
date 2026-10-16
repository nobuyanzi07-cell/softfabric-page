import useApp from "../../Hooks/useApp";

function Product() {
  const { member } = useApp();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Products</h1>
      <p className="text-gray-600 mb-6">Welcome {member?.name}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="bg-white rounded-lg shadow p-4">
            <div className="h-32 bg-gray-200 rounded mb-3" />
            <h2 className="font-semibold">Product {n}</h2>
            <p className="text-gray-600">$0.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;