import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import Link from 'next/link';
import Countdown from 'react-countdown';
import Voucher from '../components/fundiin/voucher/voucher.component';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';

const ComingSoong = () => {
  return (
    <div>
    <Navbar />
        <div style={{display: "flex", background: "#f6f7fb"}}>
                <Voucher/>
        </div>
      <Footer />
    </div>
  );
};

export default ComingSoong;
