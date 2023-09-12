const TGchatId = -1001778859852;
const TGTOKEN = `6604202617:AAEDMI__XH-3vAzLcMPQEkENon2H-WO0JEs`;

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