document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeButton = document.querySelector('.close');

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModalHandler() {
    modal.style.display = 'none';
  }

  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course";

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    certificateContent.innerHTML = `
      <h2>Certificate of Achievement</h2>
      <p>This is to certify that</p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h3>${courseName}</h3>
      <p>with legendary perseverance and world-class bad-assery for never giving up</p>
      <img src="/logo.png">
      <h3>${personalMessage}</h3>
    `;

    openModal(); 

    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) courseNameInput.value = '';
  });

  closeButton.addEventListener('click', closeModalHandler);
});