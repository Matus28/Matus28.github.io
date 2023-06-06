import emailjs from "@emailjs/browser";

export const SERVICE_ID = "service_zahu4m7";
export const TEMPLATE_ID = "template_1og50j7";
export const PUBLICK_KEY = "ST8wYGYz9ncHjsbTB";

const inputName = document.querySelector(
  ".contact-form #name"
) as HTMLInputElement;
const inputEmail = document.querySelector(
  ".contact-form #email"
) as HTMLInputElement;
const inputMessage = document.querySelector(
  ".contact-form #message"
) as HTMLTextAreaElement;

export const sendEmail = async (): Promise<void> => {
  const params = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };

  try {
    const res = await emailjs.send(
      SERVICE_ID ?? "",
      TEMPLATE_ID ?? "",
      params,
      PUBLICK_KEY
    );
    console.log(res);
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
    alert("Your message was sent successfully.");
  } catch (error: unknown) {
    console.log(error);
    alert("Something went wrong. Message could been sent!");
  }
};
