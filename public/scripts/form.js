
const sendApplication = async (data) => {
  const response = await fetch("http://localhost:8001/api/v1/applications", {
    method: "POST",
    body: data,
  });

  return response;
}

export const submitForm = async (e) => {
  e.preventDefault();
  const applicationBtn = document.querySelector(".application-btn");
  const admissionForm = document.querySelector(".form__admission");
  const formData = new FormData(admissionForm);

  try {
    const res = await sendApplication(formData);
    applicationBtn.textContent = "Submitting...";
    console.log(res);
    applicationBtn.textContent = "Submit & Continue";
  } catch (error) {
    console.log(error);
    applicationBtn.textContent = "Submit & Continue";
  }
}
