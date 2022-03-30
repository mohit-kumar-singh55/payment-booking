import Head from 'next/head';
import PaymentCheckOutContainer from '../components/PaymentCheckOutContainer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Skilly Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PaymentCheckOutContainer />

    </div>
  )
}

export default Home;