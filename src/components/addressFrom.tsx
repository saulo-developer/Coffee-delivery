import React, { useState } from 'react';

const AddressForm = () => {
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Endereço enviado:', address);
    // Aqui você faria a lógica para processar o endereço (enviar para o servidor, etc.)
  };

  return (
    <div>
      <h2>Endereço de Entrega</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="street">Rua:</label>
          <input type="text" id="street" name="street" value={address.street} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="number">Número:</label>
          <input type="text" id="number" name="number" value={address.number} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="complement">Complemento:</label>
          <input type="text" id="complement" name="complement" value={address.complement} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">Cidade:</label>
          <input type="text" id="city" name="city" value={address.city} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <input type="text" id="state" name="state" value={address.state} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="zipCode">CEP:</label>
          <input type="text" id="zipCode" name="zipCode" value={address.zipCode} onChange={handleChange} required />
        </div>
        <button type="submit">Finalizar Pedido</button>
      </form>
    </div>
  );
};

export default AddressForm;