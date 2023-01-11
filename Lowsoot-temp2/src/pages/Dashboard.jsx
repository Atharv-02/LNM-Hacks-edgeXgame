import { useParams } from 'react-router-dom';
import { Dashgraphco } from '../components/Dashgraco';
import { Dashgrapes3 } from '../components/Dashgrapes3';
import { Dashgrapf } from '../components/Dashgrapf';
import { Dashgrapfs3 } from '../components/Dashgrapfs3';
import { Dashgraph } from '../components/Dashgraph';
import { Dashgrapharea } from '../components/Dashgrapharea';
import { Dashgraphc } from '../components/Dashgraphc';
import { Dashgraphdel } from '../components/Dashgraphdel';
import { Dashgrape } from '../components/Dashgraphe';
import { Dashgraphgp } from '../components/Dashgraphgp';
import { Dashgraphref } from '../components/Dashgraphref';
import { Dashparameters } from '../components/Dashparameters';
import { Dashwebplatforms } from '../components/Dashwebplatforms';
import { Lowsootfooter } from '../components/Lowsootfooter';
import { Sidenavv3 } from '../components/sidenav/Sidenavv3';
import { Topbarv3 } from '../components/topbar/Topbarv3';

export function Dashboard() {
  const { name } = useParams();
  return (
    <div className='dcontainer'>
      <Sidenavv3 />
      <div className='dashmain'>
        <Topbarv3 />
        <div className='dashmaincontent'>
          <h1 className='dashheader'>
            <span className='introjs__3'>Visualization</span>
          </h1>
          {name === 'Building' ? (
            <div className='summaryparams'>
              <div className='summaryparam'>
                <p className='summaryparam__title'>`Total Building Space`</p>
                <p className='summaryparam__value'>`19000 KWh` </p>
              </div>
              <div className='summaryparam'>
                <p className='summaryparam__title'>`Total Building Space`</p>
                <p className='summaryparam__value'>`19000 KWh` </p>
              </div>
            </div>
          ) : (
            <Dashparameters />
          )}
          <Dashparameters />
          <div className='dashgraphs__cont'>
            {name === 'travel' && <Dashgraph />}
            {name === 'cargo' && <Dashgraphc />}
            {name === 'building' && <Dashgraphc />}
            {name === 'electricity' && <Dashgrape />}
            {name === 'fuel' && <Dashgrapf />}
            {name === 'commute' && <Dashgraphco />}
            {name === 's3fuel' && <Dashgrapfs3 />}
            {name === 's3electricity' && <Dashgrapes3 />}
            {name === 'gaspurchase' && <Dashgraphgp />}
            {/* refrigeration */}
            {name === 'refrigeration' && <Dashgraphref />}
            {name === 'delivery' && <Dashgraphdel />}
          </div>
          {/* <div className="dashgraphblock">
            <Dashgrapharea />
            <Dashwebplatforms />
          </div> */}
        </div>
        <Lowsootfooter />
      </div>
    </div>
  );
}
