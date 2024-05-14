const Contacto = () => {
   return (
      <div
         style={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <div
            className=" mb-3"
            style={{
               width: '1198px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'flex-end',
               alignItems: 'center',
            }}
         >
            {' '}
            <h2>Si quieres contactarme</h2>
            <br />
            <input
               type="email"
               className="w-50 form-control"
               id="floatingInput"
               placeholder="name@example.com"
               style={{ backgroundColor: 'white !important' }}
            />
            <br />
            <br />
            <textarea
               className="form-control w-50"
               placeholder="Comentarios"
               id="floatingTextarea"
               style={{ backgroundColor: 'white !important' }}
            ></textarea>
         </div>
      </div>
   );
};

export default Contacto;
