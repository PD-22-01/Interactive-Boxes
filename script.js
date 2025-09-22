const boxes = document.querySelectorAll('.bundle-box');
const totalDisplay = document.getElementById('total');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Deactivate all
    boxes.forEach(b => b.classList.remove('active'));
    // Activate clicked
    box.classList.add('active');

    // Update total price
    const price = box.getAttribute('data-price');
    totalDisplay.textContent = `DKK ${price}.00`;

    // Check the radio
    box.querySelector('input[type="radio"]').checked = true;
  });
});
