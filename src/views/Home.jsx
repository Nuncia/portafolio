const Home = () => {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <div style={{ height: '50px' }}>
            <h1>Mónica Ayala Huerta</h1>
            <span className="nombre">Desarrolladora FullStack</span>
            {/* <span className="nombre">Ingeniero civil en computación</span> */}
         </div>
      </div>
   );
};

export default Home;
