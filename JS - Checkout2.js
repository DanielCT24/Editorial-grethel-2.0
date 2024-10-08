function generateUniqueId() {
    const existingIds = JSON.parse(localStorage.getItem('existingIds')) || [];
    let newId;

    do {
        newId = `#${Math.floor(100000 + Math.random() * 900000).toString()}`; // Generar ID de 6 dígitos
    } while (existingIds.includes(newId));

    existingIds.push(newId);
    localStorage.setItem('existingIds', JSON.stringify(existingIds));

    return newId;
}

document.getElementById('finalize-btn').addEventListener('click', function() {
    // Recolectar datos del formulario
    const district = document.getElementById('district').value;
    const street = document.getElementById('street').value;
    const apartment = document.getElementById('apartment').value;
    const postalCode = document.getElementById('postal-code').value;
    const alias = document.getElementById('alias').value;
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const dni = document.getElementById('dni').value;
    const coupon = document.getElementById('coupon').value;
    const delivery = document.querySelector('input[name="delivery"]:checked')?.value;
    const payment = document.querySelector('input[name="payment"]:checked')?.value;

    // Verificar si todos los campos requeridos están llenos
    if (!email || !firstName || !lastName || !phone || !dni || !delivery || !payment) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }

    // Generar un nuevo ID de compra
    const purchaseId = generateUniqueId();

    // Guardar datos en localStorage
    const formData = {
        purchaseId, // Añadir el ID de compra a los datos
        district,
        street,
        apartment,
        postalCode,
        alias,
        email,
        firstName,
        lastName,
        phone,
        dni,
        coupon,
        delivery,
        payment
    };

    localStorage.setItem('formData', JSON.stringify(formData));












});
