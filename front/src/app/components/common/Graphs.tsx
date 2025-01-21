// page.js this is the entry point of application

"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Pie = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie), { ssr: false });

const Graph = (sentimientos) => {
    const sentimientosStr = typeof sentimientos === "string" ? sentimientos : JSON.stringify(sentimientos);

    const numeros = sentimientosStr.match(/-?\d+(\.\d+)?/g)?.map(Number);
  

    const data = {
        labels: ['Positivo', 'Negativo', 'Neutral'],
        datasets: [
            {
                label: 'Sentimientos',
                data: numeros,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(201, 203, 207, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
  return (
    <div >
      <h1>Análiis de sentimientos: </h1>
      <div >
        <Pie data={data} />
        </div>
    </div>
  );
};
export default Graph;
