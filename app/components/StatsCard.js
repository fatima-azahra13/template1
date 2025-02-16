export default function StatsCard({ title, value, icon, color }) {
    return (
      <div className={`bg-${color}-100 p-4 rounded-lg shadow-md flex items-center space-x-4`}>
        <div className={`text-${color}-500 text-4xl`}>{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  }
  