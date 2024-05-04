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
            <h2>Mónica Ayala Huerta</h2>
            <span className="nombre">Desarrollador FullStack</span>
            <span className="nombre">Ingeniero civil en computación</span>
         </div>
      </div>
   );
};

export default Home;
