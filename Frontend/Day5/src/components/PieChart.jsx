import {PieChart} from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 20, label: 'Zonal' },
  { id: 1, value: 15, label: 'State' },
  { id: 2, value: 10, label: 'National' },
  { id: 3, value: 5, label: 'Internal' }
];

export default function PieActiveArc() {
  return (
    <div className='piechart-container'>

    <div className='piea'>

    <PieChart
      series={[
          {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
        ]}
        height={200}
        />
        </div>
        <div className='pieb'>

        </div>
        </div>
  );
}
