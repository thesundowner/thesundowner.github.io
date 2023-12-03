const TGchatId = -1001778859852;
const TGTOKEN = `6924354270:AAEcmoRhAzjvCotn0wPL8JXn67bYYDv5dfQ`;

function telegramApiRequest(token, id, message) {

    fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${message}`,
      { method: "GET" }
    ).then(
      (success) => {
        console.log("message sent sucsessfully!" , success);
      },
      (error) => {
        console.error("error:", error);
      }
    );
  }
