const Home = () => {
   return (
      <div
         className="color-change"
         style={{
            display: 'flex',
            justifyContent: 'center',
            height: '70vh',
            alignContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <div style={{ height: '50px' }}>
            <h2>Mónica Ayala Huerta</h2>
            <span></span>
            <span className="nombre">Ingeniero civil en computación</span>
         </div>
      </div>
   );
};

export default Home;
