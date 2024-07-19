import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const AdminDashboard = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch real-time data for the chart
    const fetchData = async () => {
      // Example data (replace with actual data fetching logic)
      const data = {
        labels: ['In Progress', 'Yet to Start', 'Completed'],
        datasets: [
          {
            label: 'Tasks',
            data: [20, 10, 70], // Replace with actual data
            backgroundColor: ['rgba(75, 192, 192, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
          }
        ]
      };
      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Line data={chartData} />
    </div>
  );
};

export default AdminDashboard;
